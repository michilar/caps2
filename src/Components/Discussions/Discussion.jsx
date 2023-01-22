import React from 'react';
import { Container, Row, Tabs, Tab} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Discussion = () => {
  return (
   <Container>
        <Row className='justify-content-center p-5 m-5'>
            <Tabs justify-variant='pill' defaultActiveKey='tab-1' className='mb-1 p-0'>
                <Tab eventKey='tab-1' title='Get Started' >
                <p>Take your first steps into the world of IT, or Information Technology! Introduction to IT will teach you about core IT subjects.</p>
                </Tab>

                <Tab eventKey='tab-2' title='Introduction' >
                <p>What you will learn: <br/>
                Html and CSS basics. These languages are found on all websites.How to build websites. <br/>Develop your HTML and CSS coding skills by working on actual projects.<br/>Employability skills. Discover the other skills employers want - like team work, confidence and communication.</p>                
                </Tab>

                <Tab eventKey='tab-3' title='Fundamentals' >
                <p>Tips <br/>
                1. Keep your introduction short and clear. <br/>

                2. Say hello and give a little bit of information about yourself. Don’t say anything too private or personal. <br/>

                3. You can say what you hope to get or learn.<br/>

                4. Wish people good luck. <br/>

                5. You don’t have to write full sentences. <br/>

                6. You might use more exclamation marks (!) than in formal writing because it looks friendly.</p><br/>
                </Tab>

                <Tab eventKey='tab-4' title='Activity 1' >
                <p>HyperText Transfer Protocol (HTTP) connects you and your website request to the remote server that houses all website data. It’s a set of rules (a protocol) that defines how messages should be sent over the Internet. It allows you to jump between site pages and websites. <br/>

                When you type a website into your web browser or search for something through a search engine, HTTP provides a framework so that the client (computer) and server can speak the same language when they make requests and responses to each other over the Internet. It’s essentially the translator between you and the Internet — it reads your website request, reads the code sent back from the server, and translates it for you in the form of a website.</p>
                </Tab>

                <Tab eventKey='tab-5' title='Activity 2' >
                <p>Front-end (or client-side) is the side of a website or software that you see and interact with as an Internet user. When website information is transferred from a server to a browser, front-end coding languages allow the website to function without having to continually “communicate” with the Internet.
                <br/>
                Front-end code allows users to interact with a website and play videos, expand or minimize images, highlight text, and more. Web developers who work on front-end coding work on client-side development.</p>
                </Tab>

                <Tab eventKey='tab-6' title='Activity 3' >
                <p>Back-end (or server-side) is the side that you don’t see when you use the Internet. It’s the digital infrastructure, and to non-developers, it looks like a bunch of numbers, letters, and symbols. <br/>

                There are more back-end coding languages than front-end languages. That’s because browsers — at the front-end — only understand HTML, CSS, and JavaScript, but a server — at the back-end — can be configured to understand pretty much any language.</p>
                </Tab>

                <Tab eventKey='tab-7' title='Finals' >
                <h1 className='text-success font-weight-bold m-5'>Congratulation!!</h1>
                </Tab>



            </Tabs>
        </Row>

        <Form className='col-5 p-5 m-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="name" />
        <Form.Text className="text-muted">
            We loved to hear your insight.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Comment"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" /> Agree to terms and condition.
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
   </Container>
  )
}

export default Discussion