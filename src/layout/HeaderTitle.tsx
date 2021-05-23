import { Typography, Badge } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as TitleSvg } from '../icon/title.svg';

const { Title } = Typography;

const MainTitle = () => {
    return (
        <Title level={1}><Icon component={TitleSvg} rotate={350} /> Selluv</Title>
    );
};

const SubtitleStock = () => {
    return (
        <Badge.Ribbon placement="end" text="품절관리" />
    );
};


const SubtitleMain = () => {
    return (
        <Badge.Ribbon placement="end" text="Home" />
    );
};

const SubtitlePurchase = () => {
    return (
        <Badge.Ribbon placement="end" text="구매대행" />
    );
};

export { MainTitle, SubtitleMain, SubtitleStock, SubtitlePurchase };