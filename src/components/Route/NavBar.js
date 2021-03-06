/*@flow*/
'use strict'

import React, {Component} from 'react';


import ReactNative, {
    View,
    Text,
    Image,
    Platform,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    NavigationExperimental
} from 'react-native';


const {
    Header: NavigationHeader,
} = NavigationExperimental;

import type {
    NavigationSceneRenderer,
    NavigationSceneRendererProps
} from 'NavigationTypeDefinition';
//import NavigationManager from './NavigationManager';
import {mainColor, containingColor, lightMainColor, lightContainingColor} from '../../configure';

import {navigatePop} from '../../redux/actions/nav'
export default class NavBar extends Component {

  constructor(props: Object) {
    super(props);
  }


  _backEvent = ()=> {
    this.props.onNavigate({type: 'back'});
  };

  //加载返回按钮
  _renderBackButton = (hide: bool)=> {

    if (hide) {
      return ()=>null;
    } else {
      return (props: Object)=>(
          // onPress={props.onNavigateBack}
          <TouchableOpacity style={styles.buttonContainer} onPress={this._backEvent.bind(this)}>
            {/*<Image style={styles.button}
             resizeMode = 'contain'
             source={require('../../source/img/xy_arrow/xy_arrow.png')} />*/}
            <View style={[styles.arrowView,{borderColor:"white"}]}/>
          </TouchableOpacity>
      );
    }
  };

  //加载右边按钮
  _renderRightButton = ()=> {
    return ()=>(
        <TouchableOpacity style={styles.buttonContainer} onPress={() => alert("right")}>
          <Text>right</Text>
        </TouchableOpacity>
    )
  };


  _renderTitleComponent(props: NavigationSceneRendererProps) {

    let title = props.scene.route.title;
    // const index = props.scene.index;
    // const
    // console.log('title:',title);
    // console.log("props",JSON.stringify(props));

    if (title && title.length) {
      return (
          <NavigationHeader.Title textStyle={[styles.navigationHeaderTitle,
        {color:props.scene.route.tintColor||'white'}]}>
            {title}
          </NavigationHeader.Title>
      );
    } else {
      return null;
    }

  }

  barStyleStatu: string = 'default'
  render() {
    const {scene} = this.props;

    // console.log('scene:', scene);
    if (scene.route.tintColor == 'white' || scene.route.hideNavBar
    ) {

      Platform.OS == 'ios' && StatusBar.setBarStyle('light-content', false);
      this.barStyleStatu = 'light-content'

    } else if (this.barStyleStatu != 'default') {
      // Platform.OS == 'ios' && StatusBar.setBarStyle('default', false);
      console.log('scene1111:', scene);
      this.barStyleStatu = 'default'
    }

    if (scene.route.hideNavBar) {
      return null;
    }

    const hideBackBtn = scene.route.hideBackBtn;
    let renderRightComponent = scene.route.renderRightComponent ?
        scene.route.renderRightComponent : ()=>null;
    let renderLeftComponent = scene.route.renderLeftComponent ||
        this._renderBackButton(scene.index === 0 || hideBackBtn);
    // renderRightComponent = this._renderRightButton();
    // console.log('scene.route.renderRightComponent', renderRightComponent);
    return (
        <NavigationHeader
            {...this.props}
            //ref={header=>NavigationManager.navigationHeader=header}
            renderTitleComponent={this._renderTitleComponent}
            style={[styles.navigationHeader,{backgroundColor:scene.route.barColor||'#00bca9'}]}
            renderRightComponent={renderRightComponent}
            renderLeftComponent={renderLeftComponent}
            onNavigateBack={this._backEvent}
        />
    );
  }


}


const styles = StyleSheet.create({
  navigationHeader: {
    backgroundColor: '#00bca9',
    height: Platform.OS === 'ios' ? 64 : 48,
    borderBottomWidth: 0,
  },
  navigationHeaderTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17,
  },

  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 100,
  },
  arrowView: {
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
    borderRightWidth: StyleSheet.hairlineWidth * 2,
    borderColor: 'white',
    transform: [{rotate: '135deg'}],
    marginLeft: 15,
    width: 10,
    height: 10,
  },
  button: {
    marginLeft: 15,
    marginVertical: Platform.OS === 'ios' ? 14 : 16,
  }
});
