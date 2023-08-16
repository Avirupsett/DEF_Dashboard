import React from 'react'
import { FaBuilding } from 'react-icons/fa'
import css from "./Dashboard.module.css";
import { useTranslation } from 'react-i18next';

export default function OfficeCard({officeCountData}) {
  const { t } = useTranslation();

  return (
    <div className={css.card2} style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
    <div className={css.cardHead}>
      <span>{t("Office")}</span>
      <span>
        <FaBuilding size={50} />
      </span>
    </div>
    {Array.isArray(officeCountData) && officeCountData.length > 0 ? (
      officeCountData.map((entry, index) => (
        <div className={css.cardAmount} key={index}>
          <span>{t(entry.officeTypeName)} :</span>
          <span>{entry.officeCount}</span>
        </div>
      ))
    ) : (
      <div className={css.cardAmount}>
        <span>{t("No office data available")}</span>
      </div>
    )}
  </div>
  )
}
