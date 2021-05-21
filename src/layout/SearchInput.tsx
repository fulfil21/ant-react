import { Input, Space, Select , Row, Col } from 'antd';
import React, { ChangeEvent, ReactEventHandler, useState } from "react";

const { Search } = Input;
const { Option } = Select;

const mallOptions = [
    (<Option value="ss">스마트스토어</Option>),
    (<Option value="cp">쿠팡</Option>),
    (<Option value="11st">11번가</Option>),
    (<Option value="gm">지마켓</Option>),
    (<Option value="au">옥션</Option>),
  ];

const SearchInput = (value:any) => { 

    return (
        <>
        <Row justify="start">
            <Col span={5}>
                <Search placeholder="input search text"  onSearch={SearchInput} enterButton />
            </Col>
            <Col span={10} offset={1}>
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    defaultValue={['ss','cp','11st','gm','au']}
                    onChange={SearchInput}
                    >
                    {mallOptions}
                </Select>
            </Col>
        </Row>
        </>
    );
}

export default SearchInput;