import React, { PureComponent } from 'react';
import { Grid, Row, Col } from "react-native-easy-grid";
import { Container, Content, Header, Left, Right, Text, Card, Button, Icon, Body, Title, Form, Input, Picker, Spinner } from 'native-base';
import { ImageBackground } from 'react-native';
import styles from '../styles/main.style';
import SvgUri from 'react-native-svg-uri';
import { DrawerActions } from 'react-navigation';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    enableLoading,
    getCurrencies,
    setCurrentCountry,
    setBaseCurrencyAmount
} from '../redux/actions/appActions';



class HomeScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.props.getCurrencies();
    }

    openDrawer() {
        this.props.navigation.dispatch(DrawerActions.openDrawer());
    }

    onCountryValueChange(country) {
        this.props.setCurrentCountry(country);
    }

    setBaseCurrencyAmount(amount) {
        this.props.setBaseCurrencyAmount(amount)
    }

    refreshRates() {
        this.props.enableLoading();
        this.props.getCurrencies();
    }




    render() {
        const currencies = {
            DKK: {
                iconUrl: '<?xml version="1.0" encoding="iso-8859-1"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 268.988 268.988" style="enable-background:new 0 0 268.988 268.988;" xml:space="preserve" width="512px" height="512px"><g id="XMLID_21_"><path id="XMLID_22_" d="M139.896,0c-8.284,0-15,6.716-15,15v60.191c0,24.924-20.277,45.201-45.201,45.201H34.494V15   c0-8.284-6.716-15-15-15c-8.284,0-15,6.716-15,15v237.994c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15V150.4h45.201   c0.142,0,0.283-0.002,0.424-0.006c24.729,0.229,44.777,20.417,44.777,45.199v57.4c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15   v-57.4c0-24.597-11.871-46.473-30.184-60.201c18.313-13.729,30.184-35.604,30.184-60.201V15C154.896,6.716,148.181,0,139.896,0z" fill="#006DF0"/><path id="XMLID_23_" d="M249.494,58.988c-13.152,0-25.396,3.938-35.638,10.681c-1.855-6.178-7.58-10.681-14.362-10.681   c-8.284,0-15,6.716-15,15v180c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-130c0-19.299,15.701-35,35-35   c8.284,0,15-6.716,15-15C264.494,65.704,257.778,58.988,249.494,58.988z" fill="#006DF0"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
                flagUrl: '<?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><circle style="fill:#F0F0F0;" cx="256" cy="256" r="256"/><g><path style="fill:#D80027;" d="M200.349,222.609h309.484C493.47,97.002,386.067,0,256,0c-19.115,0-37.732,2.113-55.652,6.085v216.524H200.349z"/><path style="fill:#D80027;" d="M133.565,222.608V31.127C63.272,69.481,12.95,139.832,2.167,222.609h131.398V222.608z"/><path style="fill:#D80027;" d="M133.564,289.391H2.167c10.783,82.777,61.105,153.128,131.398,191.481L133.564,289.391L133.564,289.391z"/><path style="fill:#D80027;" d="M200.348,289.392v216.523C218.268,509.887,236.885,512,256,512c130.067,0,237.47-97.002,253.833-222.609H200.348V289.392z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
            },
            USD: {
                iconUrl: '<?xml version="1.0" encoding="iso-8859-1"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 339.004 339.004" style="enable-background:new 0 0 339.004 339.004;" xml:space="preserve" width="512px" height="512px"><path d="M262.122,232.344c0.197-26.82-10.405-48.031-31.552-63.01c-16.333-11.533-36.154-17.549-55.325-23.33  c-39.936-12.107-51.521-18.484-51.521-37.582c0-21.273,27.646-28.842,51.313-28.842c17.236,0,37.066,5.359,49.381,13.301  l24.415-37.812c-16.095-10.434-38.123-17.551-59.875-19.76V0H143.92v37.785c-40.035,8.807-65.255,34.973-65.255,70.637  c0,24.977,10.379,44.785,30.79,58.756c15.524,10.666,34.457,16.393,52.746,21.938c39.172,11.84,55.079,19.055,54.898,42.949  l-0.001,0.176c0,20.055-26.577,27.184-49.346,27.184c-21.508,0-44.897-9.426-58.155-23.441l-32.719,30.949  c16.79,17.758,41.184,30.313,67.041,35.234v36.838h45.039v-36.045C233.445,296.592,262.078,269.809,262.122,232.344z" fill="#006DF0"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
                flagUrl: '<?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><circle style="fill:#F0F0F0;" cx="256" cy="256" r="256"/><g><path style="fill:#D80027;" d="M244.87,256H512c0-23.106-3.08-45.49-8.819-66.783H244.87V256z"/><path style="fill:#D80027;" d="M244.87,122.435h229.556c-15.671-25.572-35.708-48.175-59.07-66.783H244.87V122.435z"/><path style="fill:#D80027;" d="M256,512c60.249,0,115.626-20.824,159.356-55.652H96.644C140.374,491.176,195.751,512,256,512z"/><path style="fill:#D80027;" d="M37.574,389.565h436.852c12.581-20.529,22.338-42.969,28.755-66.783H8.819 C15.236,346.596,24.993,369.036,37.574,389.565z"/></g><path style="fill:#0052B4;" d="M118.584,39.978h23.329l-21.7,15.765l8.289,25.509l-21.699-15.765L85.104,81.252l7.16-22.037 C73.158,75.13,56.412,93.776,42.612,114.552h7.475l-13.813,10.035c-2.152,3.59-4.216,7.237-6.194,10.938l6.596,20.301l-12.306-8.941 c-3.059,6.481-5.857,13.108-8.372,19.873l7.267,22.368h26.822l-21.7,15.765l8.289,25.509l-21.699-15.765l-12.998,9.444 C0.678,234.537,0,245.189,0,256h256c0-141.384,0-158.052,0-256C205.428,0,158.285,14.67,118.584,39.978z M128.502,230.4 l-21.699-15.765L85.104,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822l-21.7,15.765L128.502,230.4z M120.213,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822 L120.213,130.317z M220.328,230.4l-21.699-15.765L176.93,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822 l-21.7,15.765L220.328,230.4z M212.039,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822 l8.288-25.509l8.288,25.509h26.822L212.039,130.317z M212.039,55.743l8.289,25.509l-21.699-15.765L176.93,81.252l8.289-25.509 l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822L212.039,55.743z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
            },
            INR: {
                iconUrl: '<?xml version="1.0" encoding="iso-8859-1"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 447.185 447.185" style="enable-background:new 0 0 447.185 447.185;" xml:space="preserve"><g><path d="M358.204,96.283h-33.437c-2.211-19.379-8.961-37.519-19.672-51.56h53.108c12.721,0,23.022-9.499,23.022-22.216   c0-12.723-10.302-22.484-23.022-22.484H178.118c-0.659,0-1.294-0.023-1.971-0.023c-0.438,0-0.877,0.023-1.315,0.023H88.981   c-12.72,0-23.022,9.768-23.022,22.484s10.302,22.216,23.022,22.216h102.097c32.243,2.347,66.017,14.821,74.913,51.56H88.981   c-12.72,0-23.022,10.309-23.022,23.031c0,12.717,10.302,23.031,23.022,23.031h174.716c-10.87,29.034-40.728,46.742-82.225,46.742   h-45.788h-0.133h-26.699c-12.401,0-22.455,10.054-22.455,22.455c0,12.404,10.054,22.458,22.455,22.458h26.382   c0.109,0.012,0.207,0.065,0.316,0.065h41.665c45.268,1.72,65.402,21.35,76.946,75.055c9.032,39.892,15.682,65.875,20.912,81.438   c3.919,14.398,11.674,36.091,25.127,49.048c5.261,5.059,12.046,7.577,18.808,7.577c7.117,0,14.233-2.784,19.559-8.322   c9.76-10.144,9.937-25.842,0.993-36.334c-0.041-0.124-0.023-0.26-0.088-0.384c-8.258-15.32-18.247-56.412-30.435-108.533   c-9.688-42.381-27.787-68.778-55.213-80.499c34.437-13.22,58.127-38.506,67.412-70.772h36.966   c12.721,0,23.022-10.314,23.022-23.031S370.925,96.283,358.204,96.283z" fill="#006DF0"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
                flagUrl: '<?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><circle style="fill:#F0F0F0;" cx="256" cy="256" r="256"/><path style="fill:#FF9811;" d="M256,0C154.506,0,66.81,59.065,25.402,144.696h461.195C445.19,59.065,357.493,0,256,0z"/><path style="fill:#6DA544;" d="M256,512c101.493,0,189.19-59.065,230.598-144.696H25.402C66.81,452.935,154.506,512,256,512z"/><circle style="fill:#0052B4;" cx="256" cy="256" r="89.043"/><circle style="fill:#F0F0F0;" cx="256" cy="256" r="55.652"/><polygon style="fill:#0052B4;" points="256,187.326 273.169,226.264 315.473,221.663 290.337,256 315.473,290.337 273.169,285.73 256,324.674 238.831,285.736 196.527,290.336 221.663,256 196.527,221.663 238.831,226.264 "/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
            },
            THB: {
                iconUrl: '<?xml version="1.0" encoding="iso-8859-1"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 329.991 329.991" style="enable-background:new 0 0 329.991 329.991;" xml:space="preserve" width="512px" height="512px"><path id="XMLID_443_" d="M251.996,227.996c0-32.719-18.158-61.272-44.923-76.125c16.475-14.312,26.923-35.39,26.923-58.875  c0-38.929-28.668-71.286-66-77.075V15c0-8.284-6.716-15-15-15c-8.284,0-15,6.716-15,15v0.004h-45c-8.284,0-15,6.716-15,15v125.991  c0,0.002,0,0.003,0,0.005c0,0.002,0,0.004,0,0.005v143.99c0,8.284,6.716,15,15,15h45c0.003,8.282,6.717,14.996,15,14.996  c8.284,0,15-6.716,15-15v-0.053C214.583,313.351,251.996,274.963,251.996,227.996z M203.996,92.996c0,22.325-15.32,41.139-36,46.481  V46.521C188.674,51.864,203.996,70.671,203.996,92.996z M107.996,45.004h30v95.991h-30V45.004z M107.996,171.006h30v113.99h-30  V171.006z M167.996,284.916V171.083c30.039,1.567,54,26.491,54,56.913C221.996,258.419,198.036,283.35,167.996,284.916z" fill="#006DF0"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
                flagUrl: '<?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><circle style="fill:#F0F0F0;" cx="256" cy="256" r="256"/><path style="fill:#0052B4;" d="M496.077,166.957H15.923C5.632,194.69,0,224.686,0,256s5.632,61.31,15.923,89.043h480.155 C506.368,317.31,512,287.314,512,256S506.368,194.69,496.077,166.957z"/><g><path style="fill:#D80027;" d="M256,0C178.409,0,108.886,34.524,61.939,89.043H450.06C403.114,34.524,333.591,0,256,0z"/><path style="fill:#D80027;" d="M450.061,422.957H61.939C108.886,477.476,178.409,512,256,512S403.114,477.476,450.061,422.957z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
            },
        }

        if (this.props.loading) {
            return (
                <Container >
                    <Content contentContainerStyle={{ flex: 1 }} >
                        <Grid style={[styles.container]} >
                            <Spinner color='blue' />
                            <Text>Refreshing Rates! Please Wait...</Text>
                        </Grid>
                    </Content>
                </Container>
            );
        }
        else {

            return (
                <ImageBackground source={require('../assets/images/bg.jpg')} style={styles.backGroundImage} blurRadius={5}>
                    <Container style={styles.transparent}>
                        <Header>
                            <Left>
                                <Button transparent onPress={() => this.openDrawer()}>
                                    <Icon style={{ fontSize: 30 }} name='menu' />
                                </Button>
                            </Left>
                            <Body style={{ flex: 3 }}>
                                <Title>
                                    <Text style={{ fontSize: 15 }}>Currency Converter</Text>
                                </Title>
                            </Body>
                            <Right>
                                <Button transparent onPress={() => this.refreshRates()}>
                                    <Icon style={{ fontSize: 30 }} name='refresh' />
                                </Button>
                            </Right>
                        </Header>
                        <Content>
                            <Grid style={styles.container}>


                                <Row>
                                    <Card style={styles.card}>
                                        <Row style={{ marginTop: 10 }}>
                                            <Col size={30} style={styles.container}>
                                                <SvgUri width="30" height="30" source={require('../assets/images/currencies/Euro.svg')} />
                                            </Col>
                                            <Col size={70} style={styles.container}>
                                                <Input placeholder="0" style={styles.textInput} keyboardType='numeric' onChangeText={this.setBaseCurrencyAmount.bind(this)} />
                                            </Col>
                                        </Row>
                                        <Row >
                                            <Col size={45} style={styles.container}>
                                                <Row style={{ height: 2 }}>
                                                    <Col style={styles.line}></Col>
                                                </Row>
                                            </Col>
                                            <Col size={10} style={styles.container}>
                                                <Icon style={{ fontSize: 20, color: 'white' }} name='sync' />
                                            </Col>
                                            <Col size={45} style={styles.container}>
                                                <Row style={{ height: 2 }}>
                                                    <Col style={styles.line}></Col>
                                                </Row>
                                            </Col>
                                        </Row>

                                        <Row style={{ justifyContent: 'center', marginBottom: 10 }}>
                                            <Col size={30} style={styles.container}>
                                                <SvgUri width="30" height="30" svgXmlData={currencies[this.props.selectedCountrySymbol].iconUrl} />
                                            </Col>
                                            <Col size={70} style={styles.container}>
                                                <Form>
                                                    <Picker
                                                        iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "black", fontSize: 20 }} />}
                                                        placeholder={this.props.selectedCountryName}
                                                        placeholderStyle={{ color: 'black' }}
                                                        style={{ height: 40, width: 200, backgroundColor: 'white' }}
                                                        selectedValue={this.props.selectedCountryName}
                                                        onValueChange={this.onCountryValueChange.bind(this)}
                                                    >
                                                        <Picker.Item label="Denmark" value={{ 'symbol': 'DKK', 'name': 'Denmark', 'currency': 'Kron' }} />
                                                        <Picker.Item label="India" value={{ 'symbol': 'INR', 'name': 'India', 'currency': 'Rupee' }} />
                                                        <Picker.Item label="United States" value={{ 'symbol': 'USD', 'name': 'United S', 'currency': 'Dollar' }} />
                                                        <Picker.Item label="Thailand" value={{ 'symbol': 'THB', 'name': 'Thailand', 'currency': 'Baht' }} />
                                                    </Picker>
                                                </Form>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Row>
                                <Row>
                                    <Card style={styles.card}>
                                        <Grid>
                                            <Row style={{ marginTop: 10 }}>
                                                <Col style={{ padding: 5 }}>
                                                    <SvgUri width="85" height="85" svgXmlData={currencies[this.props.selectedCountrySymbol].flagUrl} />
                                                </Col>
                                            </Row>
                                            <Row style={{ marginTop: 10 }}>
                                                <Col size={85} style={styles.container}>
                                                    <Text style={{ fontSize: 30, color: 'green', alignSelf: 'flex-end' }}>{((this.props.baseCurrencyAmount * this.props.currencies[this.props.selectedCountrySymbol]).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                                                </Col>
                                                <Col size={15} style={styles.container}>
                                                    <SvgUri width="20" height="20" style={{ marginLeft: 7, alignSelf: 'flex-start' }} svgXmlData={currencies[this.props.selectedCountrySymbol].iconUrl} />
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </Card>
                                </Row>


                            </Grid>
                        </Content>
                    </Container>
                </ImageBackground>
            );
        }
    }
}



function mapStateToProps(state, props) {
    return {
        loading: state.appReducer.loading,
        currencies: state.appReducer.currencies,
        baseCurrencyAmount: state.appReducer.baseCurrencyAmount,
        selectedCountrySymbol: state.appReducer.selectedCountrySymbol,
        selectedCountryName: state.appReducer.selectedCountryName,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        enableLoading,
        getCurrencies,
        setCurrentCountry,
        setBaseCurrencyAmount
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
