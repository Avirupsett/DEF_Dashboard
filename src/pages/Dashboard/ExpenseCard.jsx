import React from 'react'
import css from "./Dashboard.module.css";
import { FaArrowUp, FaMoneyBillAlt } from 'react-icons/fa';

export default function OfficeCard({countExpense,totalExpense}) {
  return (
    <div className={css.card4} style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
    <div className={css.cardHead}>
      <span>Expense</span>
      <span>
        <FaMoneyBillAlt size={50} />
      </span>
    </div>
    <div className={css.cardAmount} style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: "20px",fontSize:window.innerWidth>600?".9rem":"0.8rem" }}>7 days</span>
        <span style={{ fontWeight: 'bold', fontSize:window.innerWidth>600?"1.1rem":"0.8rem" }}>{countExpense}</span>
        <i>
          <FaArrowUp style={{fontSize:window.innerWidth>600?"1.1rem":"0.8rem",marginBottom:"4px"}} />
        </i>
      </div>
      <div>

        <span style={{ fontSize:window.innerWidth>600?".9rem":"0.7rem" }}>₹</span>
        <span style={{ fontWeight: 'bold', fontSize:window.innerWidth>600?"1.1rem":"0.8rem" }}>{totalExpense}</span>
      </div>
    </div>
  </div>
  )
}
