import { Button, Card, Col, DatePicker, Form, Input, Row } from 'antd'
import React from 'react'
import './buyerRegistration.css'
import TextArea from 'antd/es/input/TextArea';

export default function BuyerRegistration() {
  const [form] = Form.useForm();
  const onFormSubmit = (formValues) => {
    console.log(formValues);
  }
  const onReset = () => {
    form.resetFields();
    // form.
  };
  return (
    <div className='buyerSection'>
      <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={onFormSubmit}>
        <Card title="Buyer Account Registration" variant="borderless" style={{ width: 900 }}>
          <Row gutter={[20, 0]}>
            <Col className="gutter-row" lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 24 }}>
              <Form.Item name="firstName" label="First Name" rules={[{ required: true }]}>
                <Input placeholder="First Name" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 24 }}>
              <Form.Item name="lastName" label="Last Name" rules={[{ required: true }]}>
                <Input placeholder="Last Name" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 24 }}>
              <Form.Item name="mail" label="Mail" rules={[{ required: true }]}>
                <Input placeholder="Mail"/>
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 24 }}>
              <Form.Item name="phone" label="Phone Number" rules={[{ required: true }]}>
                <Input placeholder="Phone Number" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 24 }}>
              <Form.Item name="dob" label="Date of Birth" rules={[{ required: true }]}>
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 24 }}>
              <Form.Item name="country" label="Country" rules={[{ required: true }]}>
                <Input placeholder="Country" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 24 }}>
              <Form.Item name="state" label="State" rules={[{ required: true }]}>
                <Input placeholder="State" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 24 }}>
              <Form.Item name="district" label="District" rules={[{ required: true }]}>
                <Input placeholder="District" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 24 }}>
              <Form.Item name="pinCode" label="Pincode" rules={[{ required: true }]}>
                <Input placeholder="Pincode" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={{ span: 16 }} md={{ span: 12 }} sm={{ span: 24 }}>
              <Form.Item name="address" label="Address" rules={[{ required: true }]}>
                <TextArea rows={4} style={{ width: "100%" }} placeholder="Address" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={{ span: 16 }} md={{ span: 12 }} sm={{ span: 24 }}>
              <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button> &nbsp;&nbsp;
                <Button htmlType="button" onClick={onReset}>
                  Reset
                </Button>

              </Form.Item>
              {/* htmlType="submit" */}
            </Col>
          </Row>
        </Card>
      </Form>
    </div>
  )
}


