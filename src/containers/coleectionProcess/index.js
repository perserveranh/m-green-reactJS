import React, { Component, Fragment } from 'react';
import { Header, Footer, strings } from '../../components';
import { connect } from 'react-redux';
import '../../css/coleectionProcess.css';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Steps, Button, message, Alert } from 'antd';

const Step = Steps.Step;
class CollectionProcess extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            current: 0
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
                current: 0
            });
        }
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const steps = [{
            title: strings.classify,
            content: strings.Organicwaste,
            text: strings.text

        }, {
            title: strings.Collect,
            content: strings.contentCollect
        }, {
            title: strings.Transport,
            content: strings.contentTranspot
        },
        {
            title: strings.Handling,
            content: strings.contentHandling,
        }
        ];

        const taiche = [{
            title: strings.classify,
            taiche: strings.Recyclables,
            text: strings.texttaiche
        }, {
            title: strings.Collect,
            taiche: strings.textCollect,
        }, {
            title: strings.Transport,
            taiche: strings.contentTranspot
        },
        {
            title: strings.Handling,
            taiche: strings.textHandling
        }
        ];
        const conlai = [{
            title: strings.classify,
            conlai: strings.inorganic,
            text: strings.textconlai
        }, {
            title: strings.Collect,
            conlai: strings.textCollection
        }, {
            title: strings.Transport,
            conlai: strings.contentTranspot
        },
        {
            title: strings.Handling,
            conlai: strings.conlaiHandling
        }
        ];
        const { current } = this.state;
        return (
            <Fragment>
                <Header />
                <Alert message={strings.wasterGroups.toUpperCase()} type="success" className="text-center text-wastergroups" />
                <div className="vc_empty_space  hidden-xs" style={{ height: '30px' }}><span className="vc_empty_space_inner"></span></div>
                <Container>
                    <Nav tabs >
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' }) }
                                onClick={() => { this.toggle('1'); }}
                            >
                                {strings.Organic}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                {strings.Recycling}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '3' })}
                                onClick={() => { this.toggle('3'); }}
                            >
                                {strings.Rest}
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <TabContent activeTab={this.state.activeTab}>
                        <div className="vc_empty_space  hidden-xs" style={{ height: '30px' }}><span className="vc_empty_space_inner"></span></div>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <Steps current={current}>
                                        {steps.map(item => <Step key={item.title} title={item.title} />)}
                                    </Steps>
                                    <div className="steps-content">

                                        <Alert
                                            message={steps[current].content}
                                            description={steps[current].text}
                                            type="warning"
                                        />
                                    </div>
                                    <div className="steps-action">
                                        {
                                            current < steps.length - 1
                                            && <Button type="primary" onClick={() => this.next()}>Next</Button>
                                        }
                                        {
                                            current === steps.length - 1
                                            && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                                        }
                                        {
                                            current > 0
                                            && (
                                                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                                    Previous
            </Button>
                                            )
                                        }
                                    </div>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    <Steps current={current}>
                                        {taiche.map(item => <Step key={item.title} title={item.title} />)}
                                    </Steps>
                                    <div className="steps-content">
                                        <Alert
                                            message={taiche[current].taiche}
                                            description={taiche[current].text}
                                            type="info"
                                        />
                                    </div>
                                    <div className="steps-action">
                                        {
                                            current < steps.length - 1
                                            && <Button type="primary" onClick={() => this.next()}>Next</Button>
                                        }
                                        {
                                            current === steps.length - 1
                                            && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                                        }
                                        {
                                            current > 0
                                            && (
                                                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                                    Previous
            </Button>
                                            )
                                        }
                                    </div>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col sm="12">
                                    <Steps current={current}>
                                        {conlai.map(item => <Step key={item.title} title={item.title} />)}
                                    </Steps>
                                    <div className="steps-content">
                                        <Alert
                                            message={conlai[current].conlai}
                                            description={conlai[current].text}
                                            type="error"
                                        />
                                    </div>
                                    <div className="steps-action">
                                        {
                                            current < steps.length - 1
                                            && <Button type="primary" onClick={() => this.next()}>Next</Button>
                                        }
                                        {
                                            current === steps.length - 1
                                            && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                                        }
                                        {
                                            current > 0
                                            && (
                                                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                                    Previous
            </Button>
                                            )
                                        }
                                    </div>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>

                </Container>
                <div className="vc_empty_space  hidden-xs" style={{ height: '30px' }}><span className="vc_empty_space_inner"></span></div>
                <Footer />
            </Fragment >
        );
    }
}

const mapStateToProps = state => {
    return {
        uiReducers: state.uiReducers
    }
}
export default connect(mapStateToProps)(CollectionProcess);
