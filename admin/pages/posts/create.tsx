import Head from 'next/head';
import { PureComponent, Fragment } from 'react';
import Page from '@components/common/layout/page';
// import Router from 'next/router';
import {
  Form,
  Input,
  Select,
  Button,
  Breadcrumb,
  // message
} from 'antd';
import { HomeOutlined } from '@ant-design/icons';
// import { postService } from '@services/post.service';

// const WYSIWYG = dynamic(() => import('@components/wysiwyg'), {
//   ssr: false
// });
class PostCreate extends PureComponent<any> {
  state = {
    submitting: false
  };

  async submit(data: any) {
    console.log('data', data);
    
    // try {
    //   this.setState({ submitting: true });

    //   const submitData = {
    //     ...data,
    //     content: this._content,
    //     type: this.props.type
    //   };
    //   const resp = await postService.create(submitData);
    //   message.success('Created successfully');
    //   // TODO - redirect
    //   this.setState({ submitting: false }, () => {
    //     window.setTimeout(() => {
    //       Router.push(
    //         {
    //           pathname: '/posts',
    //           query: {
    //             id: resp.data._id
    //           }
    //         },
    //         `/posts`
    //       );
    //     }, 1000);
    //   });
    // } catch (e) {
    //   // TODO - check and show error here
    //   message.error('Something went wrong, please try again!');
    //   this.setState({ submitting: false });
    // } finally {
    //   this.setState({ submitting: false });
    // }
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>Create new post</title>
        </Head>
        <div style={{ marginBottom: '16px' }}>
          <Breadcrumb>
            <Breadcrumb.Item href="/dashboard">
              <HomeOutlined rev={undefined} />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/posts">
              <span>Posts</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Create new post</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <Page>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            onFinish={this.submit.bind(this)}
          >
            <Form.Item
              name="title"
              rules={[{ required: true, message: 'Please input title!' }]}
              label="Title"
            >
              <Input placeholder="Enter your title" />
            </Form.Item>
            
            {/* <Form.Item
              label="Description"
              name="description"
              initialValue={descriptionCkData}
            >

            </Form.Item> */}

            <Form.Item name="slug" label="Slug">
              <Input placeholder="Custom friendly slug" />
            </Form.Item>

            <Form.Item
              name="status"
              label="Status"
              rules={[{ required: true }]}
            >
              <Select>
                <Select.Option value="public">Public</Select.Option>
                <Select.Option value="hide">Hide</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 4 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ float: 'right' }}
                loading={this.state.submitting}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Page>
      </Fragment>
    );
  }
}

export default PostCreate;
