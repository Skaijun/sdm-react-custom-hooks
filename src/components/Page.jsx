import ArrayComponent from "./array/ArrayComponent";
import AsyncComponent from "./async/AsyncComponent";
import DebounceComponent from "./debounce/DebounceComponent";
import FetchComponent from "./fetch/FetchComponent";
import PreviousComponent from "./previous/PreviousComponent";
import StorageComponent from "./storage/StorageComponent";
import TimeoutComponent from "./timeout/TimeoutComponent";
import ToggleComponent from "./toggle/ToggleComponent";
import UpdateEffectComponent from "./updateEffect/UpdateEffectComponent";

export default function Page() {

    return <>
        <h1 style={{ borderBottom: '4px solid red', marginBottom: '55px' }} >React Custom Hooks</h1>
        <br />
        {/* <ToggleComponent /> */}
        {/* <TimeoutComponent /> */}
        {/* <DebounceComponent /> */}
        {/* <UpdateEffectComponent /> */}
        {/* <ArrayComponent /> */}
        {/* <PreviousComponent /> */}
        {/* <StorageComponent /> */}
        {/* <AsyncComponent /> */}
        <FetchComponent />
    </>
}