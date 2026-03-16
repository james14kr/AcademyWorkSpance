import { FlatList, StyleSheet, Text, View } from 'react-native'
import CartItem from './CartItem';

// CartList: 장바구니 목록 전체를 보여주는 컴포넌트
// FlatList를 사용해 데이터 배열을 효율적으로 렌더링함
// ScrollView와 달리 FlatList는 화면에 보이는 항목만 렌더링하므로 성능이 좋음
const CartList = ({cartList, updateCart}) => {

  return (
    <View style={styles.listContainer}>
      {/* FlatList 주요 props:
          - data: 렌더링할 배열 데이터
          - renderItem: 각 항목을 어떻게 그릴지 정의 ({ item }을 구조분해로 받음)
          - keyExtractor: 각 항목의 고유 key 지정 (id를 문자열로 사용)
          - contentContainerStyle: 반복 렌더링되는 항목들을 감싸는 영역 스타일 */}
      <FlatList
        data={cartList}
        renderItem={({item}) => <CartItem item={item} updateCart={updateCart}/>}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}

        // {/* 반복적으로 그려지는 컴포넌트를 감싸는 전체 영역 디자인 */}
        contentContainerStyle={{
          gap : 12
        }}
      />
    </View>
  )
}

export default CartList

const styles = StyleSheet.create({
  // 목록 전체 컨테이너 스타일
  listContainer : {
    width : '100%',
    marginHorizontal : 'auto', // 수평 중앙 정렬
    padding : 12,
    backgroundColor : '#dddddd'
  }
})
