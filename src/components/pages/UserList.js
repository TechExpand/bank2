
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup,Container, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
// import { TransactionsTable } from "../pages/utils/UserTable";
import Sidebar from "./utils/Sidebar";
import Navbar  from './utils/Navbar';


import {React, useEffect, useState} from "react";
import { faAngleDown,faMoneyBill, faAngleUp, faArrowDown, faArrowUp, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Nav, Card, Image, Table, ProgressBar, Pagination } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import {AccountSeparation, getProfileList} from '../Service/Network';
import { pageVisits, pageTraffic, pageRanking } from "../data/tables";
import commands from "../data/commands";
import "../css/custom.css";
import ReactPaginate from 'react-paginate';




function UserList (){

  const [profile, setProfile] = useState([]);
  const [queryList, setqueryList] = useState([]);  

  

const handleSearch = (e)=>{
  setqueryList(
    profile.filter(function checkEmail(prof) {
      return prof.email.toString().includes(e.target.value);
    })
  )
}
 
  
  let handleProfile = (value)=>{
  
    setProfile(value);
  }

 
  
   // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        getProfileList(
        handleProfile,
        setqueryList,
      )
    }, []);


  const totalTransactions = queryList.length;

  const TableRow = (props) => {

    return (
      profile.length==0?<h3>Loading</h3>:<tr>
        <td>
        <span className="fw-normal">
            {props.user}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {props.name}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {props.email}
          </span>
        </td>
        <td>
          <span className={`fw-normal text-${props.statusVariant}`}>
          ${AccountSeparation(Number(props.amount))}
          </span>
        </td>
        <td>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
             
            </Dropdown.Toggle>
            <Dropdown.Menu>
             
              <Dropdown.Item>
                  <Link 
                  to={"/profile"}
                  state={{
                          data: props,
                        }}>
                  <FontAwesomeIcon icon={faEdit} className="me-2" />Edit
                  </Link>
                  
              
              </Dropdown.Item>

              <Dropdown.Item>
              <Link 
              to={"/Fund"} 
              state={{
                          data: props,
                        }} >
                  <FontAwesomeIcon icon={faMoneyBill} className="me-2" />Fund
                  </Link>
              
              </Dropdown.Item>

              
            
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };


  const [pageNumber, setPageNumber] = useState(0);
  
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(queryList.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  
  const displayUsers = queryList.slice(pagesVisited, pagesVisited + usersPerPage).map(t => <TableRow key={`transaction-${t.invoiceNumber}`} {...t} />)
  

  return (
<>
<Sidebar></Sidebar>
      <main className="content">
          <Navbar profile={{name:''}}/>
          <ToastContainer></ToastContainer>

 <Container>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>FirsttrustFinancials</Breadcrumb.Item>
            <Breadcrumb.Item active>Users</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Users</h4>
          <p className="mb-0">Your FirsttrustFinancials bank dashboard.</p>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <ButtonGroup>
            <Button variant="outline-secondary" size="sm">Share</Button>
            <Button variant="outline-secondary" size="sm">Export</Button>
          </ButtonGroup>
        </div>
      </div>

      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="text" onChange={handleSearch}  placeholder="Search" />
            </InputGroup>
          </Col>
          <Col xs={4} md={2} xl={1} className="ps-md-0 text-end">
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle split as={Button} variant="link" className="text-dark m-0 p-0">
                <span className="icon icon-sm icon-gray">
                  <FontAwesomeIcon icon={faCog} />
                </span>
              </Dropdown.Toggle>
          
            </Dropdown>
          </Col>
        </Row>
      </div>



      <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">SN</th>
              <th className="border-bottom">Name</th>
              <th className="border-bottom">Email</th>
              <th className="border-bottom">Balance</th>
            </tr>
          </thead>
          <tbody>
            {displayUsers}
          </tbody>
        </Table>
       
      </Card.Body>
      <ReactPaginate
             previousLabel={"Previous"}
             nextLabel={"Next"}
             pageCount={pageCount}
             onPageChange={changePage}
             containerClassName={"paginationBttns"}
             previousLinkClassName={"previousBttn"}
             nextLinkClassName={"nextBttn"}
             disabledClassName={"paginationDisabled"}
             activeClassName={"paginationActive"}
            />
    </Card>

    
    </Container>
      </main>
</>

  );
};


export default UserList;