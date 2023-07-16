import React, { useState } from 'react'
import {
  Container,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@mui/material'

import styles from './studyplan.module.scss'
import { PlusIcon, AccordionCancel } from '../../svg.js'

function Studyplan({ program, noAccordion }) {
  const [expanded, setExpanded] = useState('')
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className={styles.studyPlan}>
      <Container className="container">
        <h2 className={styles.studyPlan_title}>
          O'quv dasturi
          {/* Curriculum */}
        </h2>
        <div className={styles.studyPlan_content} id="study_plan">
          {program?.map((item) => (
            <Accordion
              key={item?.id}
              id="accordion"
              className={styles.accordion}
              expanded={noAccordion ? false : expanded === `panel${item?.id}`}
              onChange={(event, isExpanded) =>
                handleChange(isExpanded, `panel${item?.id}`)
              }
            >
              <AccordionSummary
                expandIcon={
                  noAccordion ? null : expanded === `panel${item?.id}` ? (
                    <AccordionCancel />
                  ) : (
                    <PlusIcon />
                  )
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography
                  className={styles.accordion_title}
                  sx={{ flexShrink: 0 }}
                >
                  {item?.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_details}>
                <Typography className={styles.accordion_content}>
                  <ul
                    className={
                      item?.hasOwnProperty('typesGroup')
                        ? styles.types_group_active
                        : undefined
                    }
                  >
                    {item?.hasOwnProperty('types') &&
                      item?.types?.map((item) => <li key={item?.id}>{item}</li>)}
                    {item?.hasOwnProperty('typesGroup') &&
                      item?.typesGroup.map((item) => (
                        <li key={item?.id} className={styles.inner_li}>
                          {item?.title}
                          {item?.subTypes && (
                            <ul>
                              {item?.subTypes.map((subItem) => (
                                <li key={subItem?.id}>{subItem}</li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Studyplan
