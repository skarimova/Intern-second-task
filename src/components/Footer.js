import { Table, ModalFooter } from "react-bootstrap";

function Footer(){
    return (
        <ModalFooter className="sticky-top">
            <Table className="table-borderless">
                <thead>
                    <tr style={{fontSize: '1.7vw'}}>
                        <th className="pt-5 fw-bold ps-5">NFT</th>
                        <th className="fw-bold">Компания</th>
                        <th className="fw-bold">Другое</th>
                    </tr>
                </thead>
                <tbody style={{fontSize: '1.7vw'}}>
                    <tr>
                        <th className="ps-5">Что такое NFT</th>
                        <th>О нас</th>
                        <th>Условия использования</th>
                    </tr>
                    <tr>
                        <th className="ps-5">Создайте NFT с нами</th>
                        <th>Отправить запрос</th>
                        <th>Политика конфенциальности</th>
                    </tr>
                    <tr>
                        <th className="pb-4 ps-5"><i className="bi bi-twitter text-dark"/><i className="bi bi-telegram text-dark ms-2"/></th>
                        <th></th>
                        <th></th>
                    </tr>
                </tbody>
            </Table>
        </ModalFooter>
    )
}

export default Footer;