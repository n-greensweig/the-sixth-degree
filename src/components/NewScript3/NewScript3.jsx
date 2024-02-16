import { useDispatch } from "react-redux";
import UniversalButton from "../UniversalButton/UniversalButton";
import { useState } from "react";
import { Card, Button, CardContent, Grid, Paper } from '@mui/material';

// This module is responsible for the input feilds that allows the player to create a new script.
// New scripts will be visible in saved scripts page.
function NewScript() {

    const dispatch = useDispatch();
    const [script, setScript] = useState({});

    const handleSubmit = () => {
        dispatch({ type: 'POST_SCRIPT', payload: script }); // POST script to the DB
    };

    // return (
    //     <div>
    //         <h1>New Script</h1>

    //         {/* Input fields go here */}
    //         <form onSubmit={handleSubmit}>
    //             <input type="text" placeholder="First Actor" onChange={e => setScript({ ...script, first_actor: e.target.value })} />
    //             <input type="text" placeholder="First Appearance" onChange={e => setScript({ ...script, first_appearance: e.target.value })} />
    //             <input type="text" placeholder="Second Actor" onChange={e => setScript({ ...script, second_actor: e.target.value })} />
    //             <input type="text" placeholder="Second Appearance" onChange={e => setScript({ ...script, second_appearance: e.target.value })} />
    //             <input type="text" placeholder="Third Actor" onChange={e => setScript({ ...script, third_actor: e.target.value })} />
    //             <input type="text" placeholder="Third Appearance" onChange={e => setScript({ ...script, third_appearance: e.target.value })} />
    //             <input type="text" placeholder="Fourth Actor" onChange={e => setScript({ ...script, fourth_actor: e.target.value })} />
    //             <input type="text" placeholder="Fourth Appearance" onChange={e => setScript({ ...script, fourth_appearance: e.target.value })} />
    //             <input type="text" placeholder="Fifth Actor" onChange={e => setScript({ ...script, fifth_actor: e.target.value })} />
    //             <input type="text" placeholder="Fifth Appearance" onChange={e => setScript({ ...script, fifth_appearance: e.target.value })} />
    //             <input type="text" placeholder="Sixth Actor" onChange={e => setScript({ ...script, sixth_actor: e.target.value })} />
    //             <input type="text" placeholder="Sixth Appearance" onChange={e => setScript({ ...script, sixth_appearance: e.target.value })} />
    //             <input type="text" placeholder="Seventh Actor" onChange={e => setScript({ ...script, seventh_actor: e.target.value })} />
    //             <UniversalButton text="Save Script" onClick={handleSubmit} />
    //         </form>


    //     </div>
    // );

    const [formData, setFormData] = useState({
        // Clears form on submission
        firstActor: '',
        firstAppearance: '',
        secondActor: '',
        secondAppearance: '',
        thirdActor: '',
        thirdAppearance: '',
        fourthActor: '',
        fourthAppearance: '',
        fifthActor: '',
        fifthAppearance: '',
        sixthActor: '',
        sixthAppearance: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    // Returns the 6 input fields for the actor & movie appearance.
    return (
        <>
        <form>
            <label >
                Who:
                <input type="text" name="FirstActor" value={formData.firstActor} onChange={handleChange} />
            </label>
            <br />
            <label >
                Is In:
                <input type="text" name="FirstAppearance" value={formData.firstAppearance} onChange={handleChange} />
            </label>
            <br />



            {/* Second Input Field */}
            <label>
            Who:
                <input type="text" name="SecondActor" value={formData.secondActor} onChange={handleChange} />
            </label>
            <br />
            <label>
            Is In:
                <input type="text" name="SecondAppearance" value={formData.secondAppearance} onChange={handleChange} />
            </label>
            <br />



            {/* Third Input Field */}
            <label>
            Who:
                <input type="text" name="ThirdActor" value={formData.thirdActor} onChange={handleChange} />
            </label>
            <br />
            <label>
            Is In:
                <input type="text" name="ThirdAppearance" value={formData.thirdAppearance} onChange={handleChange} />
            </label>
            <br />



            {/* Fourth Input Field */}
            <label>
            Who:
                <input type="text" name="FourthActor" value={formData.firstActor} onChange={handleChange} />
            </label>
            <br />
            <label>
            Is In:
                <input type="text" name="FourthAppearance" value={formData.firstAppearance} onChange={handleChange} />
            </label>
            <br />



            {/* Fifth Input Field */}
            <label>
            Who:
                <input type="text" name="FifthActor" value={formData.firstActor} onChange={handleChange} />
            </label>
            <br />
            <label>
            Is In:
                <input type="text" name="FifthAppearance" value={formData.firstAppearance} onChange={handleChange} />
            </label>
            <br />



            {/* Sixth Input Field */}
            <label>
            Who:
                <input type="text" name="SixthActor" value={formData.firstActor} onChange={handleChange} />
            </label>
            <br />
            <label>
            Is In:
                <input type="text" name="SixthAppearance" value={formData.firstAppearance} onChange={handleChange} />
            </label>
            <br />
        </form>

        <div>
            <br></br>
            {/* Imported the Reusable Button to use for submission */}
        <UniversalButton  text="Submit" color="primary"></UniversalButton>
        </div>
        </>
    );



};


export default NewScript;

