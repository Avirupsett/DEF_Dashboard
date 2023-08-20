import React from 'react'
import { FaUser } from 'react-icons/fa'
import css from "./Dashboard.module.css";
import { useTranslation } from 'react-i18next';

export default function UserCard({userCountData}) {
  const { t } = useTranslation();

  return (
    <div className={css.card1} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div className={css.cardHead}>
      <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{t('Users')}</span>
      <span>
        <FaUser size={50} />
      </span>
    </div>
    <div style={{display: 'flex', flexDirection: 'column'}}>
    {Array.isArray(userCountData) && userCountData.length > 0 ? (
      userCountData.map((entry, index) => (
   
        <div className={css.cardAmount} key={index}>
          <span style={{ fontSize:window.innerWidth>600?".9rem":"0.8rem"}}>{t(entry.roleName)} :</span>
          <span>{entry.userCount}</span>
        </div>
       
      ))
    ) : (
      <div className={css.cardAmount}>
        <span>{t("No user data available")}</span>
      </div>
    )}
  </div>
  </div>
  )
}