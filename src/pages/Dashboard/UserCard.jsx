import React from 'react'
import { FaUser } from 'react-icons/fa'
import css from "./Dashboard.module.css";
import { useTranslation } from 'react-i18next';

export default function UserCard({userCountData}) {
  const { t } = useTranslation();

  return (
    <div className={css.card1} style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
    <div className={css.cardHead}>
      <span>{t('Users')}</span>
      <span>
        <FaUser size={50} />
      </span>
    </div>
    {Array.isArray(userCountData) && userCountData.length > 0 ? (
      userCountData.map((entry, index) => (
        <div className={css.cardAmount} key={index}>
          <span>{t(entry.roleName)} :</span>
          <span>{entry.userCount}</span>
        </div>
      ))
    ) : (
      <div className={css.cardAmount}>
        <span>{t("No user data available")}</span>
      </div>
    )}
  </div>
  )
}
