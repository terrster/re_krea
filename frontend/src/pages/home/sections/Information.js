import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";

// Material Kit 2 React examples
// import RotatingCard from "../../../util/Cards/RotatingCard";
// import RotatingCardFront from "../../../util/Cards/RotatingCard/RotatingCardFront";
// import RotatingCardBack from "../../../util/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "../../../util/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "../../../util/Cards/BlogCards/CenteredBlogCard";

// Images
import bgFront from "../../../assets/images/niño_feliz.jpg";
// import bgBack from "../../../assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={0} my={6}>
      <Container>
        <Grid
          container
          item
          xs={11}
          spacing={3}
          alignItems="center"
          sx={{ mx: "auto" }}
        >
          <MKTypography
            variant="h1"
            color="orange"
            mt={0}
            mb={1}
            textAlign="center"
            textTransform="uppercase"
          >
            reinventa la educación{" "}
          </MKTypography>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <CenteredBlogCard
              image={bgFront}
              title="un modelo híbrido"
              description="los continuos avances en tecnología digital y la intensificación de la demanda sobre un aprendizaje centrado en los alumnos, se han combinado para presentar una oportunidad sin precedentes a la hora de transformar la educación."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "find out more",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  title="Full Documentation"
                  description="Built by developers for developers. Check the foundation and you will find
                    everything inside our documentation."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  title="MUI Ready"
                  description="The world's most popular react components library for building user interfaces."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  title="Save Time & Money"
                  description="Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  title="Fully Responsive"
                  description="Regardless of the screen size, the website content will naturally fit the given resolution."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
