'use client'
import { useRouter } from 'next/navigation'

import { Button } from '@consta/uikit/Button'
import { Grid, GridItem } from '@consta/uikit/Grid'
import { IconAdd } from '@consta/icons/IconAdd'

import RadarsList from '@/components/radars/RadarsList'
import Stack from '@/components/ui/container/Stack'
import { H1 } from '@/components/ui/Text'

export default function Home() {
  const router = useRouter()
  return (
    <Grid gap="m">
      <GridItem>
        <Stack direction="row" alignItems="center">
          <H1>Доступные радары</H1>
          <Button
            view="clear"
            label="Добавить"
            iconLeft={IconAdd}
            onClick={() => router.push('/radars/new')}
          />
        </Stack>
      </GridItem>

      <GridItem>
        <RadarsList />
      </GridItem>
    </Grid>
  )
}
