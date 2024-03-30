import SystemInfo from "./SystemInfo"
import Connectivity from "./Connectivity"
import IntegrtityAvailability from "./IntegrityAvailability"
import PII from "./PII"
import useIntakeFormContext from "../hooks/useIntakeFormContext"
import NonUsPersonnel from "./NonUSPersonnel"
import SpecialtySytems from "./SpecialtySystems"
import SystemData from "./SystemData"
import DataDescription from "./DataDescription"
import FisaData from "./FisaData"
import SystemPoc from "./SystemPoc"
import OverlayValues from "./OverlayValues"

const FormInputs = () => {

    const { page } = useIntakeFormContext()

    const display = {
        0: <SystemInfo />,
        1: <Connectivity />,
        2: <IntegrtityAvailability />,
        3: <PII />,
        4: <NonUsPersonnel />,
        5: <SpecialtySytems />,
        6: <SystemData />,
        7: <DataDescription />,
        8: <FisaData />,
        9: <OverlayValues />,
        10: <SystemPoc />
    }

    const content = (
        <div className="form-inputs flex-col">
            {display[page]}
        </div>
    )


    return content
}
export default FormInputs