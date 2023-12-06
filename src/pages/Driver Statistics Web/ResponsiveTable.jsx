import React, { useEffect, useMemo, useState } from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination, useFilters } from 'react-table';
import css from './ResponsiveTable.module.css';
import { FaRegCircleDot } from 'react-icons/fa6';
import { MdOutlineQueryStats } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Box, FormControl, InputLabel, MenuItem, Select, ThemeProvider, createTheme } from '@mui/material';
import { t } from 'i18next';

const ResponsiveTable = ({ data, deliveryPlanId, updatedBy,token,deliveryPlanStatusId }) => {
  const [filterStatus, setFilterStatus] = useState("all")
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const columns = useMemo(
    () => [
      // {
      //   Header: 'Sl No',
      //   accessor: (row, index) => index + 1,
      //   Cell: ({ cell }) => <div className='px-2 fw-bold ' style={{ color: "#3B82F6", border: "1px solid #3B82F6", borderRadius: "50%", width: 'fit-content' }}>{cell.value}</div>,
      // },

      {
        Header: 'Driver Name',
        accessor: 'driverName',
        Cell: ({ cell, row }) => <div className='d-flex align-items-center' style={{textWrap:'nowrap'}}>{cell.value} {row.original.recommendation===true && deliveryPlanId===3?<div className='p-2 py-1 d-flex align-items-center ms-1 noselect' style={{ color: "#9333EA", backgroundColor: "transparent", borderRadius: "8px", letterSpacing: ".5px", width: "fit-content" }}> ⭐</div>:<></>}</div>,
      },
      {
        Header: 'Contact No',
        accessor: 'contactNumber',
      },
      {
        Header: 'Lic. No',
        accessor: 'licenceNo',
      },
      {
        Header: 'Status',
        accessor: 'assigned',
        Cell: ({ cell, row }) => ((cell.value && row.original.deliveryPlanId === deliveryPlanId) ? <div className='p-2 py-1 d-flex align-items-center' style={{ color: "rgb(133 77 14 /1)", backgroundColor: " rgb(254 240 138/50%)", borderRadius: "8px", letterSpacing: ".5px", width: "fit-content" }}><FaRegCircleDot className='me-1' /> Busy</div> : (cell.value ? <div className='p-2 py-1 d-flex align-items-center' style={{ color: "rgb(133 77 14 /1)", backgroundColor: " rgb(254 240 138/50%)", borderRadius: "8px", letterSpacing: ".5px", width: "fit-content" }}><FaRegCircleDot className='me-1' /> Busy</div> : <div className='p-2 py-1 d-flex align-items-center' style={{ color: "rgb(22 101 52/1)", backgroundColor: " rgb(187 247 208/50%)", borderRadius: "8px", letterSpacing: ".5px", width: "fit-content" }}><FaRegCircleDot className='me-1' /> Available</div>)),
      },

      {
        Header: 'Stats',
        id: "stats",
        Cell: ({ cell, row }) =>
          <button
            className={`ps-2 pe-3 py-1 rounded-3 fs-6 btn ${css.viewbutton}`}
            style={{ color: "#6366F1", border: "2px solid #6366F1" }}
            onClick={() => handleStatsButtonClick(row.original.driverId, row.original.assigned, row.original.deliveryPlanId)}
          >
            <MdOutlineQueryStats className='ms-1' />{windowWidth > 950 ? " View" : ""}
          </button>



      },
      {
        Header: 'Action',
        accessor: 'assigned',
        id: "action",
        Cell: ({ cell, row }) => (

          (!cell.value && deliveryPlanStatusId===3) ? (


            <button
              className={`px-3 py-1 text-white rounded-3 fs-6 btn ${css.assignbutton}`}
              style={{ backgroundColor: "#3B82F6" }}
              onClick={() => handleAssignButtonClick(row.original.driverId)}
            >
              Assign
            </button>

          ) : row.original.deliveryPlanId == deliveryPlanId  ? <div className='fs-5 fw-bold' style={{ color: "#3B82F6" }}>Assigned</div> : (
            <></>
          )

        ),
      },
    ],
    []
  );
  const navigate = useNavigate();

  const handleStatsButtonClick = (driverId, assigned, deliveryId) => {
    if (assigned && deliveryId === deliveryPlanId) {
      navigate('/driverdashboardweb/' + driverId, { state: { isback: true, statusId: deliveryPlanStatusId,token:token } });
    }
    else {
      navigate('/driverdashboardweb/' + driverId, { state: { isback: true, statusId: deliveryPlanStatusId,token:token } });
    }
  };

  const handleAssignButtonClick = async (driverId) => {
    const id = toast.loading("Assigning...")
    await axios.post(`${import.meta.env.VITE_API_URL_2}/api/DeliveryPlan/AssignDriver`, { deliveryPlanId: deliveryPlanId, driverId: driverId, updatedBy: updatedBy }).then((response) => {

      toast.update(id, { render: "Assigned Successfully", type: "success", isLoading: false, autoClose: 5000, closeOnClick: true, pauseOnFocusLoss: false });
      navigate('/driverdashboardweb/' + driverId, { state: { isback: true, statusId: 3 } });
    }).catch((error) => {
      toast.update(id, { render: "Assigned Failed !", type: "error", isLoading: false, autoClose: 5000, closeOnClick: true, pauseOnFocusLoss: false });
    })

  };

  useEffect(() => {
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    gotoPage,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    pageCount,
    setPageSize,
    setFilter, // The useFilter Hook provides a way to set the filter
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 }, // Initial page index and page size
    },
    useFilters, // Adding the useFilters Hook to the table
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  const customFilter = (rows, filterValue) => {
    if (filterValue==="all"){
      setFilter('assigned', "");
    }
    else
    setFilter('assigned', filterValue);

  };

  const theme = createTheme({

  })

  return (
    <div className='my-2'>
      <div className='d-flex justify-content-between'>
        <div className='d-flex'>

          {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" > */}
          <input
            type="text"
            className='form-control ms-3 my-2 py-2'
            placeholder='Search'
            aria-label="Search"
            value={globalFilter || ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />

        </div>
       
        <div className="d-flex me-3 ms-2" >
          <ThemeProvider theme={theme}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{ mx: 1, mt: 1, minWidth: 180 }} size="small" >
              <InputLabel className="px-1" id="demo-simple-select-helper-label" style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important`,backgroundColor:'white' }}>{t("Status")}</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                displayEmpty
                value={filterStatus}
                onChange={(e) => { setFilterStatus(e.target.value); customFilter(page, e.target.value) }}
                style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }}
                selectprops={{MenuProps: {MenuListProps: {className: css.menu}}}}
              >
                <MenuItem style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }} value={"all"}>{t("All")}</MenuItem>
                <MenuItem style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }} value={"true"}>{t("Busy")}</MenuItem>
                <MenuItem style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }} value={"false"}>{t("Available")}</MenuItem>
              </Select>
            </FormControl>
            </Box>
          </ThemeProvider >
        </div>
        
      </div>
      {/* <div>
        <label>
          Show:
          <select value={globalFilter || 'all'} onChange={(e) => setGlobalFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="assigned">Assigned</option>
            <option value="unassigned">Unassigned</option>
          </select>
        </label>
      </div> */}
      <div className='rounded-3 mx-3 overflow-x-auto' style={{ border: "2px solid #F4F4F5", boxShadow: "rgba(0, 0, 0, 0.075) 0.1rem 0.1rem 1rem 2px" }}>
        <table {...getTableProps()} style={{ width: '100%' }}>
          <thead className=''>
            {headerGroups.map((headerGroup) => (
              <tr style={{ backgroundColor: '#239dab',textWrap:"nowrap",fontSize:windowWidth>500?"22px":"14px" }} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th className="text-white px-2 py-2" style={{textWrap:"nowrap",fontSize:windowWidth>500?"22px":"14px"}} {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>{column.isSorted ? (column.isSortedDesc ? ' ↑' : ' ↓') : ''}</span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td className='px-2 fs-6 py-2' {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        {page.length === 0 && (
          <div className='text-center py-3 fs-6' style={{ color: '#4B5563' }}>
            No Records found...
          </div>
        )}
      </div>
      <div className={windowWidth>500?`mt-1 d-flex justify-content-between align-items-center flex-row`:`mt-1 d-flex justify-content-center align-items-center flex-column`}>
        <span className='py-2 fs-6 mx-2 ms-3'>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <div>
          {/* <div>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '50px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        </div> */}
        </div>
        <div className='py-2 d-flex justify-content-center fs-5 mx-2 me-3'>
          <button className='mx-1 px-2 py-1 text-white rounded-3' style={{ backgroundColor: !canPreviousPage ? "rgb(193 201 211)" : "#239dab" }} onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>{' '}
          <button className='mx-1 px-2 py-1 pe-3 text-white rounded-3' style={{ backgroundColor: !canPreviousPage ? "rgb(193 201 211)" : "#239dab" }} onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'} Prev
          </button>{' '}
          <button className='mx-1 px-2 py-1 ps-3 text-white rounded-3' style={{ backgroundColor: !canNextPage ? "rgb(193 201 211)" : "#239dab" }} onClick={() => nextPage()} disabled={!canNextPage}>
            Next {'>'}
          </button>{' '}
          <button className='mx-1 px-2 py-1 text-white rounded-3' style={{ backgroundColor: !canNextPage ? "rgb(193 201 211)" : "#239dab" }} onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
          </button>{' '}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveTable;
