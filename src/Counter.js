import React, {Component} from 'react';
class Counter extends Component {
    //컴포넌트에 state를 만들 때는 constructor 메서드를 작성하여 설정
    // constructor(props) {
    //     //constructor를 작성할 때는 반드시 super(props)를 호출
    //     super(props);
    //     //state의 초깃값 설정하기 (객체형식)
    //     this.state = {
    //         number: 0,
    //         fixedNumber : 0
    //     };
    // }

    // state를 consturctor에서 꺼내기 (간략하게 쓰기)
    state = {
        number: 0,
        fixedNumber: 0
    };
    render() {
        const {number, fixedNumber} = this.state; //state를 조회할 때는 this.state로 조회합니다.
        return(
            <>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button onClick={()=>{
                    //this.setState : state에 새로운 값을 넣을 수 있음
                    this.setState({
                        number: number+1
                    },
                    ()=>{
                        console.log("방금 setSTate가 호출되었습니다.");
                        console.log(this.state);
                    })
                }}> +1</button>
            </>
        )
    }
}

export default Counter;