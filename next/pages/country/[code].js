import { useRouter } from "next/router"

export default function Country(){

const router = useRouter();
const code = router.query.code;
// const {code} = router.query;

    return <div>COuntry detail == {code}</div>
}