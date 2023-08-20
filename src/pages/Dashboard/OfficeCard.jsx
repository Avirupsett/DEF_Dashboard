import React from 'react'
import { FaBuilding } from 'react-icons/fa'
import css from "./Dashboard.module.css";
import { useTranslation } from 'react-i18next';

export default function OfficeCard({officeCountData}) {
  const { t } = useTranslation();

  return (
    <div className={css.card2} style={{ display: 'flex', flexDirection: 'column', justifyContent:'space-between' }}>
    <div className={css.cardHead}>
      <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{t("Office")}</span>
      <span>
        <FaBuilding size={50} />
      </span>
    </div>
    <div style={{display: 'flex', flexDirection: 'column'}}>
    {Array.isArray(officeCountData) && officeCountData.length > 0 ? (
      officeCountData.map((entry, index) => (
  
        <div className={css.cardAmount} key={index}>
          <span style={{ fontSize:window.innerWidth>600?".9rem":"0.8rem"}}>{t(entry.officeTypeName)} :</span>
          <span>{entry.officeCount}</span>
        </div>
       
      ))
    ) : (
      <div className={css.cardAmount}>
        <span>{t("No office data available")}</span>
      </div>
    )}
    </div>
  </div>
  )
}