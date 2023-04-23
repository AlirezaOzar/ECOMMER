import { Box, Checkbox, FormControl, FormControlLabel, Typography } from "@mui/material";
import AddressForm from "./AddressForm";

const Shipping = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
}) => {
  return (
    <Box m="30px auto">
      {/* Billing form */}
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize="18px">
          Billing information
        </Typography>
        <AddressForm
          type="billingAddress"
          values={values.billingAddress}
          touched={touched}
          errors={errors}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </Box>

      <Box mb="20px">
        <FormControlLabel
          label="Same for Shipping Address"
          control={
            <Checkbox
              defaultChecked
              value={values.shippingAddress.isSameAddress}
              onChange={() => setFieldValue("shippingAddress.isSameAddress", !values.shippingAddress.isSameAddress)}
            />
          }
        />

      </Box>
      {/* Shiping Form */}
      {!values.shippingAddress.isSameAddress && (
        <Box>
          <Typography sx={{ mb: "15px" }} fontSize="18px">
            Billing information
          </Typography>
          <AddressForm
            type="shipingAddress"
            values={values.shippingAddress}
            touched={touched}
            handleBlur={handleBlur}
            handleChange={handleChange}
            errors={errors}
          />
        </Box>
      )}
    </Box>
  );
}

export default Shipping;