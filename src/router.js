import Vue from 'vue'
import Router from 'vue-router'
// main
import Home from './views/Home.vue'
import About from './views/About.vue'
// categories
import JSCategory from './components/JavascriptCategory.vue'
import AngularCategory from './components/AngularCategory.vue'
import NetCategory from './components/NetCategory.vue'
import OthersCategory from './components/OthersCategory.vue'
// articles - JS
import JsOne from './components/JS/JsOne.vue'
import JsTwo from './components/JS/JsTwo.vue'
import JsThree from './components/JS/JsThree.vue'
import JsAsync from './components/JS/JsAsync.vue'
import JsObjects from './components/JS/JsObjects.vue'
import JsEcma from './components/JS/JsEcma.vue'
// articles - ANGULAR
import AngularPerformance from './components/ANGULAR/Performance.vue'
// articles - NETWORK
import NetOne from './components/NETWORK/NetOne.vue'
import NetTwo from './components/NETWORK/NetTwo.vue'
import NetThree from './components/NETWORK/NetThree.vue'
// articles - OTHERS
import OthersErrors from './components/OTHERS/OthersErrors.vue'
import OthersAlgorithmics from './components/OTHERS/OthersAlgorithmics.vue'
import OthersCssPreload from './components/OTHERS/OthersCssPreload.vue'
import OthersPwa from './components/OTHERS/OthersPwa.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			component: About
		},
		{
			path: '/javascript',
			name: 'JavascriptCategory',
			component: JSCategory
		},
		{
			path: '/angular',
			name: 'AngularCategory',
			component: AngularCategory
		},
		{
			path: '/network',
			name: 'NetworkCategory',
			component: NetCategory
		},
		{
			path: '/others',
			name: 'OthersCategory',
			component: OthersCategory
		},
		{
			path: '/article/js/one',
			name: 'JsOne',
			component: JsOne
		},
		{
			path: '/article/js/two',
			name: 'JsTwo',
			component: JsTwo
		},
		{
			path: '/article/js/three',
			name: 'JsThree',
			component: JsThree
		},
		{
			path: '/article/js/async',
			name: 'JsAsync',
			component: JsAsync
		},
		{
			path: '/article/js/objects',
			name: 'JsObject',
			component: JsObjects
		},
		{
			path: '/article/js/ecma',
			name: 'JsEcma',
			component: JsEcma
		},
		{
			path: '/article/angular/performance',
			name: 'AngularPerformance',
			component: AngularPerformance
		},
		{
			path: '/article/net/one',
			name: 'NetOne',
			component: NetOne
		},
		{
			path: '/article/net/two',
			name: 'NetTwo',
			component: NetTwo
		},
		{
			path: '/article/net/three',
			name: 'NetThree',
			component: NetThree
		},
		{
			path: '/article/others/errors',
			name: 'OthersErrors',
			component: OthersErrors
		},
		{
			path: '/article/others/algorithmics-basis',
			name: 'OthersAlgorithmics',
			component: OthersAlgorithmics
		},
		{
			path: '/article/others/css-preload',
			name: 'OthersCssPreload',
			component: OthersCssPreload
		},
		{
			path: '/article/others/pwa',
			name: 'OthersPwa',
			component: OthersPwa
		}
	],
	mode: 'history'
})
