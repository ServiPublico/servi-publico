import React, { memo, useCallback, useEffect } from 'react'

import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	ScrollView,
	StatusBar
} from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import SvgOption from '../../svgs/staticsHealth/SvgOptions'
import SvgSetting from '../../svgs/staticsHealth/SvgSetting'
import SvgHover from '../../svgs/staticsHealth/SvgHover'
import SvgGlueco from '../../svgs/staticsHealth/SvgGlueco'
import SvgEdit from '../../svgs/staticsHealth/SvgEdit'
import SvgWeight from '../../svgs/staticsHealth/SvgWeight'
import { Chart } from './components/Chart'
import { NavFooter } from '../../Components/NavFooter'
import { useRoute } from '@react-navigation/native'
import { connect } from 'react-redux'
import { fetchDataMain } from '../../redux/actions/actionMain'
import { getTokenAndBusiness } from '../../utils/storage/getTokenAndBussines'

const StaticsHealth = ({ getDataMain, actions }) => {
	const route = useRoute()
	useEffect(() => {
		;(async () => {
			const { token, business } = await getTokenAndBusiness()
			await actions.fetchDataMainAction({
				token,
				business
			})
		})()
	}, [])

	return (
		<View style={styles.container}>
			<StatusBar
				translucent={true}
				backgroundColor={'transparent'}
				barStyle={'light-content'}
			/>
			<View style={styles.header}>
				<Text style={styles.title}>INFORMACION</Text>
				<TouchableOpacity style={styles.btnClose}>
					<SvgOption />
				</TouchableOpacity>
				<TouchableOpacity style={styles.btnOption}>
					<SvgSetting />
				</TouchableOpacity>
			</View>

			<View style={{ height: '77%' }}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.boxStatus}>
						<Text style={styles.txtGood}>Buen dia 👍</Text>
						<Text style={styles.txtKeep}>EMPIEZA A GESTIONAR!</Text>
					</View>
					{getDataMain.length <= 0 ? (
						<></>
					) : (
						<>
							{getDataMain.map((data, i) => (
								<React.Fragment key={i}>
									<View style={styles.containerChart}>
										<View style={styles.boxHeader}>
											<Text style={styles.txtTitle}>
												{data.title}
												<Text style={{ color: '#ABA4AC' }}></Text>
											</Text>
										</View>
										<View style={styles.line} />
										<View
											style={{ flexDirection: 'row', justifyContent: 'center' }}
										>
											<Text style={{ fontSize: 20 }}>{data.quantity}</Text>
										</View>
										<View style={styles.boxBottom}>
											<TouchableOpacity style={styles.btnBottom}>
												<Text style={styles.txtBtnBottom}>{data.text}</Text>
											</TouchableOpacity>
											<View style={styles.lineVertical} />
										</View>
									</View>
								</React.Fragment>
							))}
						</>
					)}
				</ScrollView>
			</View>

			<NavFooter route={route.name} />
		</View>
	)
}
const mapDispatchToProps = (dispatch) => {
	return {
		actions: { fetchDataMainAction: fetchDataMain(dispatch) }
	}
}

function mapStateToProps(state) {
	return {
		getDataMain: state.mainReducer.getDataMain
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StaticsHealth)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F7F8F9'
	},
	header: {
		backgroundColor: '#6979F8',
		borderBottomLeftRadius: 24,
		borderBottomRightRadius: 24,
		height: 96,
		paddingTop: getStatusBarHeight(),
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 17,
		color: '#fff'
	},
	btnClose: {
		position: 'absolute',
		bottom: 20,
		left: 16
	},
	btnOption: {
		position: 'absolute',
		bottom: 20,
		right: 16
	},
	containerTime: {
		flexDirection: 'row',
		height: 48,
		margin: 16,
		borderRadius: 24,
		backgroundColor: '#FFF'
	},
	btnTime: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	txtTime: {
		fontSize: 12,
		color: '#1A051D'
	},
	svgHover: {
		position: 'absolute',
		bottom: 0,
		left: 40
	},
	boxStatus: {
		margin: 16,
		backgroundColor: '#FFA26B',
		borderRadius: 16,
		paddingTop: 20,
		paddingLeft: 24,
		paddingBottom: 23
	},
	txtGood: {
		fontSize: 20,
		color: '#FFF',

		fontWeight: '500'
	},
	txtKeep: {
		fontSize: 16,
		color: '#FFF'
	},
	boxHeader: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	containerChart: {
		borderRadius: 16,
		backgroundColor: '#FFF',
		paddingHorizontal: 16,
		paddingTop: 16,
		marginHorizontal: 16,
		marginBottom: 16
	},
	txtTitle: {
		marginLeft: 8,

		fontSize: 14,
		color: '#1A051D',
		flex: 1
	},
	line: {
		height: 1,
		backgroundColor: '#F7F8F9',
		borderRadius: 16
	},
	boxBottom: {
		flexDirection: 'row'
	},
	btnBottom: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 12
	},
	txtBtnBottom: {
		fontSize: 14,
		color: '#ABA4AC'
	},
	txtBtnBottomActive: {
		fontSize: 14,
		color: '#0084F4'
	},
	lineVertical: {
		width: 1,
		backgroundColor: '#F7F8F9',
		borderRadius: 16
	}
})
