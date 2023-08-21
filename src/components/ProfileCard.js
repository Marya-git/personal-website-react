import Style from '../mystyle.module.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

function ProfileCard({professionalExperience, image, body}){
    //argument destructuring
    // const {professionalExperience} = props
    return (
            <MDBCard className={Style.card}>
                <div className="bg-image hover-overlay ripple">
                    <img className={Style.cardimage} hover-overlay src={image} position='top'  alt="Job Images" />
                    <a href="#">
                        <div class="mask" style={{backgroundColor: 'rgba(57, 192, 237, 0.2)'}}></div>
                    </a>
                </div>
                <MDBCardBody className={Style.body}>
                    <MDBCardTitle className={Style.cardtitle}>{professionalExperience}</MDBCardTitle>
                    <MDBCardText className={Style.cardtext}><b>Skills:</b> {body}</MDBCardText>
                </MDBCardBody>
            </MDBCard>
    );
}

export default ProfileCard;