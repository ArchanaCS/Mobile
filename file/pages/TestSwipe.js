import styled from "react-native-styled-components";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
export const Container=styled.component
{
    <Container>
         <FirstPage/>
         <SecondPage/>
    </Container>
    
}

// import Swiper from "react-native-screens-swiper";
// import FirstPage from "./FirstPage";
// import SecondPage from "./SecondPage";

// export default function TestSwipe() {
   
//     const data = [
//         {
//             tabLabel: 'Valid component in form of JSX element',
//             component: <FirstPage/>,
//         },
//         {
//             tabLabel: 'Valid component in form of React component',
//             component: <SecondPage/>,
//             props: {}, // (optional) additional props
//         },
//         {
//             tabLabel: 'Valid component in form of render function',
//             component: ({index, ...props}) => {
//                 return null;
//             },
//             props: {}, // (optional) additional props
//         },
//     ];

//     return (
//         <Swiper
//             data={data}
//             isStaticPills={true}
//             style={styles}
//             // FlatList props
//         />
//     );
// }


//     const styles = {
//         pillButton: {
//             backgroundColor: 'white',
//         },
//         pillActive: {
//             backgroundColor: 'yellow',
//         },
//         pillLabel: {
//             color: 'gray',
//         },
//         activeLabel: {
//             color: 'white',
//         },
   
// };
