import { Card, Col, Row } from 'antd'
import React from 'react'
import './buyerRegistration.css'

export default function BuyerRegistration() {
  return (
    <div className='buyerSection'>
      <Card title="Account Registration" variant="borderless" style={{ width: 900 }}>
        <Row gutter={[20,20]}>
          <Col className="gutter-row" lg={{span:8}} md={{span:12}} sm={{span:24}}>
            <div >col-6</div>
          </Col>
          <Col className="gutter-row" lg={{span:8}} md={{span:12}} sm={{span:24}}>
            <div >col-6</div>
          </Col>
          <Col className="gutter-row" lg={{span:8}} md={{span:12}} sm={{span:24}}>
            <div >col-6</div>
          </Col>
          <Col className="gutter-row" lg={{span:8}} md={{span:12}} sm={{span:24}}>
            <div >col-6</div>
          </Col>
        </Row>
      </Card>
    </div>
  )
}
