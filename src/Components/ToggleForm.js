
import { Card, Row, Col, Divider, Input, Button } from "antd";

function ToggleForm(props) {

    const { showFormFunc, showForm } = props

    if (showForm === 'Add New Food') {
        return (
            <div style={{display:'flex', flexDirection:"column", alignItems:'center'}}>
           
                <Card style={{ width: 500 }}>
                    <Button onClick={showFormFunc} style={{ backgroundColor: 'grey' }}><button style={{ backgroundColor: 'grey', borderStyle: 'none' }}>Hide Form</button></Button>
                </Card>
            

            </div>
        )
    }
    else {
        return (
            <div style={{display:'flex', flexDirection:"column", alignItems:'center'}}>
           
                <Card style={{ width: 500 }}>
                    <Button onClick={showFormFunc} style={{ backgroundColor: 'grey' }}><button style={{ backgroundColor: 'grey', borderStyle: 'none' }}>Add New Food</button></Button>
                </Card>
           

            </div>
        )
    }


}
export default ToggleForm;