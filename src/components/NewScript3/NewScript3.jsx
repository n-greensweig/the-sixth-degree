import { useDispatch } from "react-redux";
import UniversalButton from "../UniversalButton/UniversalButton";
import { useState } from "react";

function newScript() {

    const dispatch = useDispatch();

    const [script, setScript] = useState({});

    const handleSubmit = () => {
        dispatch({ type: 'POST_SCRIPT', payload: script }); // POST script to the DB
    };

    return (
        <div>
            <h1>New Script</h1>

            {/* Input fields go here */}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="First Actor" onChange={e => setScript({ ...script, first_actor: e.target.value })} />
                <input type="text" placeholder="First Appearance" onChange={e => setScript({ ...script, first_appearance: e.target.value })} />
                <input type="text" placeholder="Second Actor" onChange={e => setScript({ ...script, second_actor: e.target.value })} />
                <input type="text" placeholder="Second Appearance" onChange={e => setScript({ ...script, second_appearance: e.target.value })} />
                <input type="text" placeholder="Third Actor" onChange={e => setScript({ ...script, third_actor: e.target.value })} />
                <input type="text" placeholder="Third Appearance" onChange={e => setScript({ ...script, third_appearance: e.target.value })} />
                <input type="text" placeholder="Fourth Actor" onChange={e => setScript({ ...script, fourth_actor: e.target.value })} />
                <input type="text" placeholder="Fourth Appearance" onChange={e => setScript({ ...script, fourth_appearance: e.target.value })} />
                <input type="text" placeholder="Fifth Actor" onChange={e => setScript({ ...script, fifth_actor: e.target.value })} />
                <input type="text" placeholder="Fifth Appearance" onChange={e => setScript({ ...script, fifth_appearance: e.target.value })} />
                <input type="text" placeholder="Sixth Actor" onChange={e => setScript({ ...script, sixth_actor: e.target.value })} />
                <input type="text" placeholder="Sixth Appearance" onChange={e => setScript({ ...script, sixth_appearance: e.target.value })} />
                <input type="text" placeholder="Seventh Actor" onChange={e => setScript({ ...script, seventh_actor: e.target.value })} />
                <UniversalButton text="Save Script" onClick={handleSubmit} />
            </form>


        </div>
    );
}

export default newScript;