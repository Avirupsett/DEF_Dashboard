import React from 'react'
import { FaArrowUp, FaMoneyBill } from 'react-icons/fa'
import css from "./Dashboard.module.css";
import { useTranslation } from 'react-i18next';

export default function SalesCard({countIncome,totalIncome,todaySales}) {
  const { t } = useTranslation();

  return (
    <div className={css.card3} style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
    <div className={css.cardHead} >
      <span>{t("Sales")}</span>
      <span>
        <FaMoneyBill size={50} />
      </span>
    </div>
    <div>
    <div className='mb-2' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ marginRight: "20px", fontSize: window.innerWidth > 600 ? ".9rem" : "0.8rem" }}>{t("Today")}</span>
          <div>
            <div>
              <span style={{ fontSize: window.innerWidth > 600 ? ".9rem" : "0.7rem" }}>₹</span>
              <span style={{ fontWeight: 'bold', fontSize: window.innerWidth > 600 ? "1.1rem" : "0.8rem" }}>{todaySales}</span>
            </div>
          </div>
        </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: "20px",fontSize:window.innerWidth>600?".9rem":"0.8rem" }}>7 {t("days")}</span>
        <span style={{ fontWeight: 'bold',fontSize:window.innerWidth>600?"1.1rem":"0.8rem" }}>{countIncome}</span>
        <i>
          <FaArrowUp style={{fontSize:window.innerWidth>600?"1.1rem":"0.8rem",marginBottom:"4px"}} />
        </i>
      </div>
      <div>
        <span style={{ fontSize:window.innerWidth>600?".9rem":"0.7rem" }}>₹</span>
        <span style={{ fontWeight: 'bold',fontSize:window.innerWidth>600?"1.1rem":"0.8rem" }}>{totalIncome}</span>
      </div>
    </div>
  </div>     
  </div>     
  )
}
