import { fetchCountry } from "@/api";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router"

export default function Country({country}){

    const router = useRouter();
    //const code = router.query.code;
     const {code} = router.query;
    console.log(country);
    return (
        <div>{country.commonName}, {country.officialName}</div>

    )
}

Country.Layout = SubLayout;

export const getServerSideProps = async(context) => {

const {code} = context.params;
    let country = [];
    if(code) {
        country = await fetchCountry(code);
    }

    return {
        props: {country}
    }
}