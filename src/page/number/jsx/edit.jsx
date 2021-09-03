import React, { useState, useEffect, useContext, useRef } from 'react'
import { Modal, Button, Form, Input, Rule } from 'shineout'

import { getList, add, update } from '../serve'

import { context } from '../reducers'

export default function edit() {
  const [state, dispatch] = useContext(context)
  const [submit, setSubmit] = useState(true)
  const { modalType, formDefault } = state
  const formRef = useRef(null)
  // 规则校验
  const rules = Rule({
    tel: {
      func: (value, formData, callback) => {
        const reg = /^1[3-9][0-9]{9}$/
        if (!value) {
          callback(new Error('请输入手机号'))
        } else if (!reg.test(value)) {
          callback(new Error('请输入正确的手机号'))
        } else {
          callback(true)
        }
      }
    }
  })
  // 重置
  function reset() {
    const params = {
      pageIndex: 1,
      pageSize: 10
    }
    dispatch({ type: 'getList', payload: getList(params) })
    dispatch({ type: 'changeVisible', payload: false })
    // 重置
    formRef.current && formRef.current.reset()
  }
  // 新增
  function newAdd(data) {
    add(data).then((res) => {
      setSubmit(true)
      if (res) {
        reset()
      }
    }).catch(setSubmit(true))
  }
  // 编辑
  function edits(data) {
    update(data).then((res) => {
      setSubmit(true)
      if (res) {
        reset()
      }
    }).catch((err) => {
      setSubmit(true)
      console.log('err', err)
    })
  }
  // 保存
  const onSave = (data) => {
    if (!submit) return
    setSubmit(false)
    if (modalType === 'add') {
      newAdd(data)
    } else {
      edits(data)
    }
  }
  // 关闭
  const handleClose = () => {
    // 重置
    formRef.current && formRef.current.reset()
    dispatch({ type: 'changeVisible', payload: false })
  }
  return (
    <Modal
      visible={state.visible}
      width={500}
      title={modalType === 'add' ? '新增' : '编辑'}
      onClose={handleClose}
      footer={[
        <Button key="cancel" onClick={handleClose}>取消</Button>,
        <Modal.Submit>保存</Modal.Submit>
      ]}
    >
      <Form
        formRef={(ref) => {
          formRef.current = ref
        }}
        labelWidth="100px"
        value={formDefault}
        onChange={(data) => {
          dispatch({ type: 'changeForm', payload: data })
        }}
        onSubmit={onSave}
      >
        <Form.Item required label="名称：" >
          <Input name="name" placeholder="请输入名称" rules={[rules.required('请输入名称')]} />
        </Form.Item>
        <Form.Item required label="金额：">
          <Input name="price" type="number" placeholder="请输入金额" rules={[rules.required('请输入金额')]} />
        </Form.Item>
        <Form.Item required label="总金额：">
          <Input name="priceAll" type="number" placeholder="请输入金额" rules={[rules.required('请输入总金额')]} />
        </Form.Item>
        <Form.Item required label="手机号：">
          <Input name="tel" maxLength="11" type="number" placeholder="请输入手机号" rules={[rules.required('请输入手机号'), rules.tel]} />
        </Form.Item>
        <Form.Item required label="管理员：">
          <Input name="person" placeholder="请输入管理员" rules={[rules.required('请输入管理员')]} />
        </Form.Item>
      </Form>
    </Modal>
  )
}

