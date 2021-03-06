import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Etc from '../screens/Etc';
import Login from '../screens/Login';
import AuthStack from './AuthStack';
//import TabNavigation from './Tab';
import Notice from '../screens/Notice';
import NoticeStack from './NoticeStack';
import Question from '../screens/Question';
import QuestionStack from './QuestionStack';
import User_admin from '../screens/User_admin';
import User_adminStack from './User_adminStack';
import service_intro from '../screens/Service_intro';
import recruit_info from '../screens/Recruiting';
import Personal_info from '../screens/Personal_Info';

const Stack3 = createStackNavigator();

const EtcStack = () => {
    return (
        <Stack3.Navigator initialRouteName='Etc' screenOptions={{
            headerTitleAlign: 'center',
            
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 20,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}>
        <Stack3.Screen name='Etc' component={Etc} options={{ title: 'W A R D' }} screenOptions={{
            headerTitleAlign: 'center',
            
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 100,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}/>
        <Stack3.Screen name='Login' component={AuthStack} options={{ title: '' }} screenOptions={{
            headerTitleAlign: 'center',
            headerTitle: 'login',
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 100,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}/>
        <Stack3.Screen name='Notice' component={NoticeStack} options={{ title: '공지사항' }} screenOptions={{
            headerTitleAlign: 'center',
            headerTitle: 'login',
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 100,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}/>
        <Stack3.Screen name='Question' component={QuestionStack} options={{ title: '자주하는 질문' }} screenOptions={{
            headerTitleAlign: 'center',
            headerTitle: 'login',
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 100,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}/>

        <Stack3.Screen name='User_admin' component={User_adminStack} options={{ title: '계정 관리',headerShown: false}} screenOptions={{
            headerTitleAlign: 'center',
            headerTitle: 'login',
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 100,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}/>

        <Stack3.Screen name='Service_intro' component={service_intro} options={{ title: 'WARD 서비스 소개'}} screenOptions={{
            headerTitleAlign: 'center',
            headerTitle: 'login',
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 100,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}/>

        <Stack3.Screen name='Recruiting' component={recruit_info} options={{ title: 'WARD 채용'}} screenOptions={{
            headerTitleAlign: 'center',
            headerTitle: 'login',
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 100,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}/>
        
        <Stack3.Screen name='Personal_info' component={Personal_info} options={{ title: '개인정보 처리방침'}} screenOptions={{
            headerTitleAlign: 'center',
            headerTitle: 'login',
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 100,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}/>

        <Stack3.Screen name='Use_term_info' component={Personal_info} options={{ title: '이용 약관'}} screenOptions={{
            headerTitleAlign: 'center',
            headerTitle: 'login',
            headerBackTitleVisible: false,
            headerTitleStyle : { fontSize : 100,fontFamily: 'NotoSansKR_400Regular'},
            //headerStyle: { height : 60},
            }}/>
        
    </Stack3.Navigator>
    );
  };
  

export default EtcStack;