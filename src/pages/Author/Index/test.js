/*
 * @authors :Bin Mei
 * @date    :2017-05-26
 * @description： 网易音乐 -- 更多示例
 */

import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import classnames from 'classnames';
import { Link ,browserHistory } from 'react-router';
import { fetchJson } from 'src/utils/fetch';
import {StaticToast,Svg,PanelNav} from 'src/components/common';
import update from 'immutability-helper';
// import { updateIn,List,merge,Map,Set,get,getIn,fromJS } from 'immutable';
import format from "src/utils/format";
import actions from "src/store/actions";

import './Author.scss';


class Works extends Component{

	state={
		isPlay:true,
		currentIndex:0
	}
	componentDidMount(){

		localStorage.setItem('test',1234567);
		let test = localStorage.getItem('test');
		console.log(typeof test);

	}
	render(){
		let {isPlay,currentIndex}=this.state;
		return ( 
			<div>
				作者
			</div>
			
		);
	}
};

export default Works;