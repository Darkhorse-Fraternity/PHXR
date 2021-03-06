/* @flow */
'use strict';
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Picker,
    Image,
    LayoutAnimation,
    Alert
} from 'react-native'
import {pixel, navbarHeight} from '../../util/'
import imagePicker from '../../util/imagePicker'
import {connect} from 'react-redux'
import {navigatePush} from '../../redux/actions/nav'
import {uploadAvatar} from '../../redux/actions/util'
import {backViewColor, blackFontColor, grayFontColor} from '../../configure';
const EmitterSubscription = require('EmitterSubscription');
import {createAnimatableComponent} from 'react-native-animatable';
const AniScrollView = createAnimatableComponent(ScrollView);
import {logout} from '../../redux/actions/login'
import {my_head} from '../../../source/'
const styles = StyleSheet.create({
    list: {
        backgroundColor: backViewColor,
        marginTop: navbarHeight,
    },
    groupSpace: {
        height: 15 / 2,
    },
    group: {
        backgroundColor: 'white',
    },
    headerStyle: {
        paddingLeft: 29 / 2,
        paddingRight: 23 / 2,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    row: {
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: 29 / 2,
        paddingRight: 23 / 2,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    row2: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowText: {
        fontSize: 14,
        // fontWeight: '500',
        color: blackFontColor,
    },
    separator: {
        height: pixel,
        backgroundColor: '#bbbbbb',
        marginLeft: 15,
    },
    arrowView: {
        borderBottomWidth: pixel * 2,
        borderRightWidth: pixel * 2,
        borderColor: '#8c8c85',
        transform: [{rotate: '315deg'}],
        marginLeft: 5,
        width: 10,
        height: 10,
    },
    destext: {
        margin: 56 / 2,
        marginLeft: 15,
        // marginLeft:15,
        fontSize: 11,
        color: grayFontColor
    },

    thumbnail: {
        marginTop: 13,
        marginBottom: 13,
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: -2
    },

});


class PersonInfo extends React.Component {

    constructor(props: Object) {
        super(props);
        this.state = {}
    }

    state: {

    };

    componentDidMount() {



        // this.userListener = userManager.lestenUerInfo((info) => {
        //   // self.setState({userCenterData:info})
        //   this.setState({...info})
        // })
    }

    componentWillUnmount() {
        // this.schoolChangeListener.remove();
        // this.nickNameListener.remove();
        // this.phoneListener.remove();
        // this.placeIDChangeListener.remove();
        // let listeners = DeviceEventEmitter.listeners("schoolChanged");
        // console.log("listeners", listeners);
        // this.handle && this.handle.next();
        // this.userListener && this.userListener.remove();
    }

    _renderHeadRow(onPress: Function = ()=> {
    }) {
        const source = this.props.userData.avatar ? {uri: this.props.userData.avatar.url} : my_head

        return (
            <TouchableHighlight onPress={onPress} style={styles.group}>
                <View style={styles.headerStyle}>

                    <View style={styles.infoContainer}>
                        <Text style={styles.rowText}>修改头像</Text>
                    </View>
                    <Image
                        source={source}
                        style={styles.thumbnail}
                    />
                    <View style={styles.arrowView}/>
                </View>
            </TouchableHighlight>
        );
    }


    _renderRow(title: string, des: string, onPress: Function) {
        return (
            <View>
                <TouchableHighlight onPress={onPress}>
                    <View style={styles.row}>
                        <Text style={styles.rowText}>
                            {title}
                        </Text>
                        <View style={styles.row2}>
                            <Text style={styles.rowText}>
                                {des}
                            </Text>
                            {title != '账号' && <View style={styles.arrowView}/>}
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }

    // handle:Object;
    // _changeGrade=(value:string)=>{
    //
    //   if(!value || value == '未设定') return;
    //   this.setState({grade_str: value});
    //   //保存到服务器
    //   saveUserInfoRequest.params.grade = gradeName.indexOf(value) +1;
    //   if(saveUserInfoRequest.params.grade >0){
    //     this.handle  = request(saveUserInfoRequest, function(response){
    //          if(response.statu){
    //            userManager.saveInfo({grade_str:value,grade:
    //              saveUserInfoRequest.params.grade});
    //          }
    //     });
    //   }
    // };


    // _showDialog(){
    //   if(OS != 'ios'){
    //     const callBack = (id, text)=>{
    //        this._changeGrade(text);
    //     };
    //     const data =   {
    //         items: gradeName,
    //         title: "选择年级",
    //         itemsCallback: callBack,
    //         negativeText: "取消",
    //     }
    //
    //     const dialog = new DialogAndroid();
    //     dialog.set(data);
    //     dialog.show();
    //   }
    // }

    // _renderPicker() {
    //
    //   if(this.state.showPicker && OS == 'ios' ){
    //       let selectedValue = this.state.grade_str|| '高一';
    //       return (
    //         <View>
    //           <Picker
    //             selectedValue={selectedValue}
    //             mode = 'dropdown'
    //             onValueChange={(value) => this._changeGrade(value)}>
    //             {gradeName.map((key) =>
    //                 <Picker.Item label={key} value={key} key='test' />
    //             )}
    //           </Picker>
    //         </View>
    //       );
    //     }
    // }

    render() {


        // console.log('test:',this.props.userData);

        return (
            <ScrollView animation="fadeIn" duration={500} delay={100} style={styles.list}>
                <View style={styles.groupSpace}/>
                {/*{this._renderHeadRow(this.props.picker)}*/}

                <View style={styles.groupSpace}/>
                {/*{this._renderRow('账号',this.props.userData.mobilePhoneNumber ,() => {

                 })}*/}
                <View style={styles.groupSpace}/>
                {this._renderRow('我的账户', this.props.userData.username, () => {
                    // NavigationManager.goToPage("NickName");
                    this.props.push("Account");
                })}


                <View style={styles.groupSpace}>
                </View>
                <View style={styles.group}>
                    {this._renderRow('修改密码', "", () => {
                        // NavigationManager.goToPage("AlterPwd");
                        this.props.push("AlterPwd");
                    })}
                </View>

                <View style={styles.groupSpace}>
                </View>
                <View style={styles.group}>
                    {this._renderRow('个人信息', "", () => {
                        // NavigationManager.goToPage("AlterPwd");
                        this.props.push("UserInfo");
                    })}
                </View>

                <View style={styles.groupSpace}>
                </View>
                <View style={styles.group}>
                    {this._renderRow('信用信息', "", () => {
                        // NavigationManager.goToPage("AlterPwd");
                        this.props.push("CreditInfo");
                    })}
                </View>

                <View style={styles.groupSpace}>
                </View>
                <View style={styles.group}>
                    {this._renderRow('我的资产', "", () => {
                        // NavigationManager.goToPage("AlterPwd");
                        this.props.push("AssetsList");
                    })}
                </View>
                <View style={styles.groupSpace}>
                </View>
                <View style={styles.group}>
                    {this._renderRow('关于我们', "", () => {
                        // NavigationManager.goToPage("AlterPwd");
                        const webUrl = 'http://app.puhuixinrong.com:9090/aboutus.html';
                        this.props.push({key: 'WebView', title: '关于我们', url: webUrl});
                    })}
                </View>
                <View style={styles.groupSpace}>
                </View>
                <View style={styles.group}>
                    {this._renderRow('退出登录', "", () => {
                        // NavigationManager.goToPage("AlterPwd");
                        Alert.alert(
                            '确定要退出吗？',
                            "",
                            [
                                {text: '取消', onPress: () => {}},
                                {text: '确定', onPress: () =>{
                                    this.props.logout();
                                }},
                            ])
                    })}
                </View>
            </ScrollView>
        );
    }
}


const mapStateToProps = (state) => {
    //从login reduce 中获取state的初始值。
    // console.log('state:',state);
    return {
        userData: state.login.data,
        //  state:state.route.navigationState.routes[state.route.navigationState.index],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        push: (key)=> {
            dispatch(navigatePush(key))
        },
        picker: ()=> {
            // dispatch(pickerImage())
            imagePicker({}, (response)=> {
                // console.log('Response = ', response);
                if (response.uri) {
                    // userManager.saveInfo({headimg:response.uri});

                    dispatch(uploadAvatar(response.uri))
                }
            })
        },
        logout:()=>dispatch(logout())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonInfo)
