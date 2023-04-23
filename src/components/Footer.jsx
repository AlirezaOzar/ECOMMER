import { useTheme } from "@mui/material";
import { Box, Typography} from "@mui/material";
import { shades } from "../theme";


const Footer = () => {
    const {
        palette : {neutral},
    } = useTheme();

    return ( 
        <Box mt="70px" p="40px 0" backgroundColor="#F2F2F2">
          <Box
             width="80%"
             margin="auto"
             display="flex"
             justifyContent="space-between"
             flexWrap="wrap"
             rowGap="30px"
             columnGap="clamp(20px, 30px, 40px)"
           >
            <Box width="clamp(20%, 30%, 40%)">
              <Typography variant="h4" fontWeight="bold" mb="30px" color={shades.secondary[500]}>ECCOMMER</Typography>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, similique?
              </div>
            </Box>
            <Box>
                <Typography variant="h4" fontWeight="bold" mb="30px">AboutUs</Typography>
                <Typography mb="30px">Careers</Typography>
                <Typography mb="30px">Our Stores</Typography>
                <Typography mb="30px">Terms & Conditions</Typography>
                <Typography mb="30px">Privacy Policy</Typography>
            </Box>
            <Box>
                <Typography variant="h4" fontWeight="bold" mb="30px">AboutUs</Typography>
                <Typography mb="30px">Careers</Typography>
                <Typography mb="30px">Our Stores</Typography>
                <Typography mb="30px">Terms & Conditions</Typography>
                <Typography mb="30px">Privacy Policy</Typography>
            </Box>
            <Box>
                <Typography variant="h4" fontWeight="bold" mb="30px">AboutUs</Typography>
                <Typography mb="30px">Careers</Typography>
                <Typography mb="30px">Our Stores</Typography>
                <Typography mb="30px">Terms & Conditions</Typography>
                <Typography mb="30px">Privacy Policy</Typography>
            </Box>
          </Box>
        </Box>
     );
}
 
export default Footer;