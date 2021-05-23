import { Typography } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as TitleSvg } from '../icon/title.svg';

const { Title } = Typography;

const MainTitle = () => {
    return (
        <Title level={1}><Icon component={TitleSvg} rotate={340} /> Selluv</Title>
    );
};

const SubtitleStock = () => {
    return (
        <Title level={4} code type="secondary">품절관리</Title>
    );
};


const SubtitleMain = () => {
    return (
        <Title level={4} code type="secondary">Main</Title>
    );
};

const SubtitlePurchase = () => {
    return (
        <Title level={4} code type="secondary">구매대행</Title>
    );
};

export { MainTitle, SubtitleMain, SubtitleStock, SubtitlePurchase };