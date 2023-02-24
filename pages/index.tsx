import React, {useState} from "react";
import {addDays, format} from "date-fns";
import {it} from "date-fns/locale";
import Layout from "../components/layout";
import AppBarComponent from "../components/ui/app-bar";
import Grid2 from "@mui/material/Unstable_Grid2";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    List,
    ListItem,
    ListItemIcon,
    Typography
} from "@mui/material";
import styles from "../styles/FrontFridgePage.module.scss";
import {Sell} from "@mui/icons-material";

type PastryFrontFridgeProduct = {
    name: string
    maxDefrostQty: number,
    shelfDays: number,
}

type PastryFrontFridgeItem = {
    product: PastryFrontFridgeProduct
    defrostDate?: string
    shelfDate?: string
}

const examplesPastryFrontFridgeProducts: PastryFrontFridgeProduct[] = [
    {name: "Lemon caprese", maxDefrostQty: 4, shelfDays: 5},
    {name: "Choco caprese", maxDefrostQty: 4, shelfDays: 5},
    {name: "Cherry tart", maxDefrostQty: 2, shelfDays: 5},
    {name: "2 Sicily tart", maxDefrostQty: 3, shelfDays: 5},
    {name: "Choco-orange tart", maxDefrostQty: 1, shelfDays: 5},
    {name: "Lemon-pistache cake", maxDefrostQty: 4, shelfDays: 5},
    {name: "Choco-Vanilla muffin", maxDefrostQty: 2, shelfDays: 5},
    {name: "Blueberry Vegan muffin", maxDefrostQty: 2, shelfDays: 5},
    {name: "Occhio di bue", maxDefrostQty: 5, shelfDays: 5},
]


const exampleStartingItems: PastryFrontFridgeItem[] = [
    {product: examplesPastryFrontFridgeProducts[0], defrostDate: "22/02", shelfDate: "27/02"},
    {product: examplesPastryFrontFridgeProducts[0], defrostDate: "22/02", shelfDate: "27/02"},
    {product: examplesPastryFrontFridgeProducts[0], defrostDate: "21/02", shelfDate: "26/02"},
    {product: examplesPastryFrontFridgeProducts[1], defrostDate: "22/02", shelfDate: "27/02"},
    {product: examplesPastryFrontFridgeProducts[1], defrostDate: "21/02", shelfDate: "26/02"},
    {product: examplesPastryFrontFridgeProducts[1], defrostDate: "19/02", shelfDate: "24/02"},
    {product: examplesPastryFrontFridgeProducts[2], defrostDate: "22/02", shelfDate: "27/02"},
    {product: examplesPastryFrontFridgeProducts[2], defrostDate: "22/02", shelfDate: "27/02"},
    {product: examplesPastryFrontFridgeProducts[2], defrostDate: "22/02", shelfDate: "27/02"},
    {product: examplesPastryFrontFridgeProducts[2], defrostDate: "21/02", shelfDate: "26/02"},
    {product: examplesPastryFrontFridgeProducts[3], defrostDate: "21/02", shelfDate: "26/02"},
    {product: examplesPastryFrontFridgeProducts[4], defrostDate: "19/02", shelfDate: "24/02"},
    {product: examplesPastryFrontFridgeProducts[5], defrostDate: "22/02", shelfDate: "27/02"},
    {product: examplesPastryFrontFridgeProducts[6], defrostDate: "22/02", shelfDate: "27/02"},
    {product: examplesPastryFrontFridgeProducts[6], defrostDate: "21/02", shelfDate: "26/02"},
    {product: examplesPastryFrontFridgeProducts[7], defrostDate: "22/02", shelfDate: "27/02"},
    {product: examplesPastryFrontFridgeProducts[7], defrostDate: "21/02", shelfDate: "26/02"},
    {product: examplesPastryFrontFridgeProducts[7], defrostDate: "19/02", shelfDate: "24/02"},
    {product: examplesPastryFrontFridgeProducts[8], defrostDate: "21/02", shelfDate: "26/02"},
    {product: examplesPastryFrontFridgeProducts[8], defrostDate: "21/02", shelfDate: "26/02"},
    {product: examplesPastryFrontFridgeProducts[8], defrostDate: "21/02", shelfDate: "26/02"},
    {product: examplesPastryFrontFridgeProducts[8], defrostDate: "21/02", shelfDate: "26/02"},
    {product: examplesPastryFrontFridgeProducts[8], defrostDate: "21/02", shelfDate: "26/02"},
    {product: examplesPastryFrontFridgeProducts[8], defrostDate: "21/02", shelfDate: "26/02"},
]

const IndexPage = () => {

    const [frontFridgeStatus, setFrontFridgeStatus] = useState<PastryFrontFridgeItem[]>(exampleStartingItems);

    const getItemsForPastryProduct = (product: PastryFrontFridgeProduct) => {
        return frontFridgeStatus.filter((value, index) => value.product === product)
    }


    /*const handleOnClick = (event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, pastryProductGroup: PastryFrontFridgeProduct) => {
        console.log("From the front store I woul like to start the defronsting process of: ", pastryProductGroup);
        console.log("Current date: ", )
        console.log("Expiring date: ", )
    };*/

    const defrostAPastryItem = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, pastryProductGroup: PastryFrontFridgeProduct) => {
        event.preventDefault();
        console.log("Adding a new item to the Pastry's front fridge: ", pastryProductGroup.name);
        const defrostingDate = Date.now();
        const defrostedDateFormatted = format(defrostingDate, "do MMMM", {locale: it});
        const expiringDateCalculated = addDays(defrostingDate, pastryProductGroup.shelfDays);
        const expiringDateFormatted = format(expiringDateCalculated, "do MMMM", {locale: it});
        const newItem: PastryFrontFridgeItem = {
            "product": pastryProductGroup,
            "defrostDate": defrostedDateFormatted,
            "shelfDate": expiringDateFormatted
        };

        console.log("The new Item is: ", newItem)
        setFrontFridgeStatus((prevState) => ([newItem, ...prevState]));
        console.log(frontFridgeStatus)

    }

    const removeAPastryItem = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, item: PastryFrontFridgeItem) => {
        event.preventDefault();
        console.log(`An item of ${item.product.name} will be removed from the front fridge`);
        setFrontFridgeStatus((prevState) => (prevState.filter(value => value !== item)))
        // setFrontFridgeStatus()
    }


    return <Layout pageName={"pastryFrontFridge"}>
        <AppBarComponent/>
        <h3>Front Store Pastry Fridge</h3>
        <Grid2 container={true} spacing={3}>
            {examplesPastryFrontFridgeProducts.map((pastryProductGroup, indexGroup) => {

                const items = getItemsForPastryProduct(pastryProductGroup)
                // console.log(`Nel gruppo ${pastryProductGroup.name} ci sono questi elementi: `, items)
                const canBeDefrosted = items.length < Math.ceil(pastryProductGroup.maxDefrostQty * 1.4)

                const warningPushProduct = items.length > pastryProductGroup.maxDefrostQty

                // console.log(pastryProductGroup.name, canBeDefrosted)


                return <Grid2 xs={3} key={pastryProductGroup.name + indexGroup}>
                    <Card>
                        <CardHeader title={pastryProductGroup.name}
                                    subheader={`Max out Qty: ${pastryProductGroup.maxDefrostQty}`}/>
                        <CardContent>

                            {warningPushProduct &&
                                <Typography variant={"caption"} color={"error"}>Push this product. The out quantity is
                                    more than expected</Typography>}

                            {items.length > 0
                                && <List>

                                    {items.map((defrostedProduct, indexSingleItem) => {
                                        return <ListItem key={indexSingleItem}
                                                         className={styles.pastryItem}
                                                         onClick={event => removeAPastryItem(event, defrostedProduct)}
                                                         sx={{
                                                             justifyContent: "space-between"
                                                         }}>
                                            {`${indexSingleItem + 1} - Expires on: ${defrostedProduct.shelfDate}`}
                                            <ListItemIcon>
                                                <Sell/>
                                            </ListItemIcon>
                                        </ListItem>
                                    })}
                                </List>
                            }


                        </CardContent>

                        <Typography align={"center"} color={"orangered"}>SELLER SIDE</Typography>

                        {pastryProductGroup.maxDefrostQty > 0
                            && canBeDefrosted
                            && <CardActions>
                                <Button variant={"outlined"}
                                        onClick={event => defrostAPastryItem(event, pastryProductGroup)}>
                                    Defrost
                                </Button>
                            </CardActions>
                        }
                    </Card>
                </Grid2>
            })}
        </Grid2>
    </Layout>;
};


export default IndexPage;
