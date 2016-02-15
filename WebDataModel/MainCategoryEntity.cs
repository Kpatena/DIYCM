﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebDataModel {
    public class MainCategoryEntity {
        [Key]
        public int CategoryId { get; set; }

        [ForeignKey("ProjectEntity")]
        public int ProjectId { get; set; }
        public ProjectEntity ProjectEntity { get; set; }

        [MaxLength(30)]
        public string CategoryName { get; set; }

        [MaxLength(100)]
        public string Description { get; set; }

        // TOTAL OF ALL SUB-BUDGETS$
        public decimal BudgetAmount { get; set; }

        // TOTAL OF ALL SUB-ACTUAL$
        public decimal ActualAmount { get; set; }
        
        public decimal PercentCompleted { get; set; }

        // BudgetAmount - ActualAmount
        public decimal VarianceAmount { get; set; }
    }
}
