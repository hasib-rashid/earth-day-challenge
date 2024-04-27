import { Image, Accordion, Grid, Container, Title } from '@mantine/core';
import classes from './FAQ.module.css';
import hero from "../../public/earth_image.png"

const placeholder =
    'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.';

export function FAQ() {
    return (
        <div className={classes.wrapper}>

            <Container size="lg">
                <Grid id="faq-grid" gutter={50}>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Image src={hero} alt="Frequently Asked Questions" />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Title order={2} ta="left" className={classes.title}>
                            Welcome to Our Earth Day Celebration!
                        </Title>
                        <br />
                        <Accordion chevronPosition="right" defaultValue="another-account" variant="separated">
                            <Accordion.Item className={classes.item} value="another-account">
                                <Accordion.Control>Did you know?</Accordion.Control>
                                <Accordion.Panel>
                                    Earth Day was first celebrated on April 22, 1970, and now includes a wide range of events coordinated globally by EARTHDAY.ORG including 1 billion people in more than 193 countries.
                                </Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item className={classes.item} value="reset-password">
                                <Accordion.Control>Why Celebrate Earth Day?</Accordion.Control>
                                <Accordion.Panel>Earth Day is more than just a single day — April 22. It's a day to remind us to take action in our communities and beyond, to protect the environment, restore damaged ecosystems, and live a more sustainable life.</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item className={classes.item} value="newsletter">
                                <Accordion.Control>How You Can Help</Accordion.Control>
                                <Accordion.Panel>
                                    <p>Join us in making a difference! Here are some ways you can contribute to preserving our planet:</p>
                                    <ul>
                                        <li>Reduce, reuse, and recycle.</li>
                                        <li>Volunteer for cleanups in your community.</li>
                                        <li>Conserve water and electricity.</li>
                                        <li>Plant a tree.</li>
                                        <li>Educate others about environmental conservation.</li>
                                    </ul>
                                </Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item className={classes.item} value="credit-card">
                                <Accordion.Control>
                                    Do you store credit card information securely?
                                </Accordion.Control>
                                <Accordion.Panel>{placeholder}</Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>

                    </Grid.Col>
                </Grid>

            </Container>
        </div>
    );
}