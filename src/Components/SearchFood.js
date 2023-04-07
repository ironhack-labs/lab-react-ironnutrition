import { Card, Row, Col, Divider, Input, Button } from "antd";

function SearchFood (props) {

    const{searchFood} = props

  
        return (
            <div style={{display:'flex', flexDirection:"column", alignItems:'center'}}>
            
                <Card style={{ backgroundColor: 'pink', width:500, height:450}}>
                    <Col>
                        <label>Search</label>
                        <Input onChange={searchFood}/>
                    </Col>
    
                </Card>
            
    
            </div>
        )
    
  
}
export default SearchFood;