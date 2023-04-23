import React from 'react';
import { Card, Row, Button, Col } from 'react-bootstrap';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {successNote} from "../utils/ToastNotify";

//Variables
let financeList = [
  {
    id:1,
    title:"SNAP",
    desc: "SNAP FINANCE-> 100 days same as cash. 12-18 Months of Approvals. $0 Initial Fee. Start Paying two weeks after delivery. You can apply from website and store.Up to $5000",
    image: 'https://via.placeholder.com/150'
  },
  {
    id:2,
    title:"KOALIFI",
    desc: "KOALIFI FINANCE-> 92 Days same as cash. 12-18 Months of Approvals. $10 Initial Fee.  Start Paying two weeks after delivery. Higher Amount Approvals .IN-STORE ONLY",
    image: 'https://via.placeholder.com/150'
  },
  {
    id:3,
    title:"ACIMA",
    desc: "92 Days same as cash. 12-18 Months of Approvals. $50 Initial Fee.  Start Paying two weeks after delivery. Higher Amount Approvals .IN-STORE ONLY",
    image: 'https://via.placeholder.com/150'
  },
  {
    id:4,
    title:"AFFIRM",
    desc: "AFFIRM FINANCE-> No same as cash time. It depends on the credit score. Different interest rates. 1-12 Months Different Options. No Application Fee .WEBSITE ONLY",
    image: 'https://via.placeholder.com/150'
  },
  {
    id:5,
    title:"SHOP PAY",
    desc: "Divide all orders by 4. No interest. No Application Fee. WEBSITE ONLY",
    image: 'https://via.placeholder.com/150'
  },
  {
    id:6,
    title:"REQUIREMENTS",
    desc: "REQUIREMENTS - Minimum requirements for a customer to apply for financing is: being over 18 years old - Having a bank account matching the ID - Having a monthly income of at least 750 dollars - If these conditions are present and the credit rating is not too bad, it is quick and easy to get approved.",
    image: 'https://via.placeholder.com/150'
  }
]



const Financing = () => {

  //handles
  const handleCopyClick = (text) => {
    successNote(`Copied: ${text}`);
  };


  return (
    <Row className='px-4 '  xs={1} md={2} lg={4}>
      {financeList.map(card => (
        <div className="mb-4 col-12 col-md-6 col-lg-3 px-2">
            <Card >
          <Card.Header>{card.title}</Card.Header>
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Text style={{ height: '100px', overflowY: 'auto' }}>{card.desc}</Card.Text>
            <div className='w-100 w-sm-25'>
            <CopyToClipboard text={card.text}>
              <Button variant="primary"
                      onClick={() => handleCopyClick(card.title)}
                      style={{
                        backgroundColor: "#CD9B4F",
                        width:"100%"
                      }}>Copy</Button>
            </CopyToClipboard>
            </div>
          </Card.Body>
        </Card>
        </div>
        
      ))}
    </Row>
  )
}

export default Financing