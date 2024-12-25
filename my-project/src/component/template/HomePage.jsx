import Banner from "@/component/template/Banner";
import Number from "@/component/template/Number";
import CardHomePage from "@/component/template/CardHomePage";
import SliderCard from "@/component/template/SliderCard";
import BannerMain from "@/component/template/BannerMain";

function HomePage() {
    return (
        <>
            <Banner/>
            <Number/>
            <CardHomePage/>
            <SliderCard/>
            <BannerMain/>
        </>
    );
}

export default HomePage;