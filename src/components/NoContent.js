import { Empty, Row, Col } from "antd";

function NoContent() {
  return (
    <Row>
        <Col>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}>
                <p>Oops! There is no more content to show.</p>
                <img src="" alt="" />
            </Empty>
        </Col>
    </Row>
  );
}

export default NoContent;