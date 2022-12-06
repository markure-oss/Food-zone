import { StyleSheet, Text, View, ScrollView, Platform, StatusBar } from 'react-native'
import React, { useState, useCallback, useContext } from 'react'
import { COLOR } from '../../assets/font/color'
import { useFocusEffect } from '@react-navigation/native'

// api
import baseUrl from '../../common/baseUrl'
import axios from 'axios'

// component
import OrderCard from '../../components/Cart/OrderCard'
import Loading from '../../components/Loading'
// Context
import AuthGlobal from '../../Context/store/AuthGlobal'


export default function Orders(props) {
  const context = useContext(AuthGlobal)
  const [customer, setCustomer] = useState('')
  const [orderListAll, setOrderListAll] = useState()
  const [loading, setLoading] = useState(true)

  useFocusEffect(
    useCallback(() => {
      axios
        .get(`${baseUrl}orders`)
        .then((res) => {
          const data = res.data
          const userOrders = data.filter((order) => {
            return order.customer._id == context.stateUser.user.customerId
          })
          setOrderListAll(userOrders)
          setLoading(false)
        })
        .catch((error) => {
          console.log(error)
        })
      setLoading(true)
      setCustomer(context.stateUser.user.customerId)
    }, [context.stateUser.isAuthenticated])
  )


  return (

    loading ? <Loading /> :
      <ScrollView
        viewIsInsideTabBar={true}
        extraHeight={200}
        enableOnAndroid={true}
        style={{ backgroundColor: COLOR.mainColor }}
      >

        <View style={styles.container}>
          <Text style={styles.title}>Orders</Text>
          <View style={{ width: '100%', }}>
            {
              orderListAll.map((order) => {
                // console.log(order.customer._id)
                return <OrderCard key={order._id} order={order} navigation={props.navigation} isAdmin={context.stateUser.user.isAdmin} />
              })
            }
          </View>
        </View>

      </ScrollView >

  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#ccc',
    fontWeight: 'bold',
    marginBottom: 20
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: 'center'
  }
})