import React from 'react'
import styles from './TableList.module.css'
import { useQuery } from '@tanstack/react-query'
import { ChangePrice } from '../../../features/Trades/api/ChangePrice/ChangePrice'
import TableListItem from '../TableListItem/TableListItem'
import cn from 'classnames'

const TableList = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['changePrices'],
        queryFn: ChangePrice,
        refetchInterval: 10000,
    })

    if (isLoading) {
        return 'Loading'
    }

    return (
        <div className={styles.container}>
            <h4 className={styles.heading}>Maket trend</h4>

            <div className={styles.table}>
                <div className={styles.tableHeader}>
                    <span className={styles.headerItem}>Name</span>
                    <span className={cn(styles.headerItem, styles.center)}>
                        Last Price
                    </span>
                    <span className={cn(styles.headerItem, styles.center)}>
                        24h Change
                    </span>
                </div>
                {data.map((item) => (
                    <TableListItem
                        key={item.symbol}
                        symbol={item.symbol}
                        lastPrice={item.lastPrice}
                        priceChange={item.priceChange}
                    />
                ))}
            </div>
        </div>
    )
}

export default TableList
