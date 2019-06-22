import React, { Component } from "react";
import { Link } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import { Row, Col, Table, Button, Popconfirm, Form, Input } from "antd";
import Axios from "axios";

const EditableContext = React.createContext();


const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    id:'',
    title: '',
    image: '',
    desc: '',
    editing: false,
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, ()=>{
      if(editing) {
        this.input.focus();
      }
    });
  };

  renderCell = form => {
    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`,
            },
          ],
          initialValue: record[dataIndex],
        })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={this.toggleEdit}
      >
        {children}
      </div>
    );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        width: '20%',
        editable: true,
      },
      {
        title: "CreatedDate",
        dataIndex: "createdAt",
        key: "createdAt"
      },
      {
        title: 'Description',
        key: 'desc',
        render: desc => <span>{desc.desc.substr(0, 60)}...</span>
      },
      {
        title: 'Image',
        key: 'image',
        width: '30%',
        render: image => (
          <span>
            <img alt={"example"} src={image.image} style={{width:'50%'}}/>
          </span>
        )
      },
      {
        title: 'operation',
        width: '20%',
        key:'id',        
        render: (id) =>
          this.state.blogs.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(id.id)}>
              <Link to={"/admin/update/"+id.id}><Button type="primary">Update</Button></Link> &nbsp;{" "}
              <Button
          type="danger"
          onClick={() => ""}
        >
          Delete
        </Button>
            </Popconfirm>
          ) : null,
      },
    ];
  }

  handleDelete = key => {
    Axios.delete(`/blogs/${key}`)
    .then(data => {
      console.log(key);
      // this.forceUpdate();
      // this.props.history.push('/admin/dashboard');
      Axios.get(`/blogs`)
      .then(data => {
        let blogs = data.data.reverse();
        this.setState({
          blogs
        });
      })
      .catch(err => { 
        console.log(err);
      });
    })

     const blogs = [...this.state.blogs];
    this.setState({ blogs: blogs.filter(item => item.key !== key) });
  };


  state = {
    blogs: []
  }

  componentDidMount() {
    Axios.get(`/blogs`)
      .then(data => {
        let blogs = data.data.reverse();
        let {id,title,image, desc} = data.data
        this.setState({
          blogs,
          id,
          title,
          image,
          desc
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

//  


  render() {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    
    return (      
      <MainLayout>
        <Row gutter={10}>
          <Col span={3}>
            <h1>Dashboard</h1>
            <Link to="/admin/insert">
              <h2>Insert</h2>
            </Link>
          </Col>
          <Col span={21}>
          <Table
          // rowKey={id}
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={this.state.blogs}
          columns={columns}
        />
          </Col>
        </Row>
      </MainLayout>
    );
  }
}
