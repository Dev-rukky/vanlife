import { useOutletContext } from "react-router-dom"

function HostVanPhotos() {
    const { currentVan } = useOutletContext()


    return (
        <img src={currentVan.imageUrl} className="host-van-detail-info-image" />
    )
}

export default HostVanPhotos