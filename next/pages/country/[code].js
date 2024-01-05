import { useRouter } from "next/router"

export default function Country(){

const router = useRouter();
const code = router.query.code;

    return <div>COuntry detail == {code}</div>
}