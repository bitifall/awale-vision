<?php
namespace Drupal\mymodule\Controller;

use Drupal\Core\Controller\ControllerBase;

class MyModuleController extends ControllerBase {

  /**
   * Provide markup.
   *
   * @return array
   */
  public function content() {
    return array(
      '#type' => 'markup',
      '#markup' => t('My custom markup.'),
    );
  }
}